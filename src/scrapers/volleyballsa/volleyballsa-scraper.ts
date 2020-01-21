import Cheerio = require('cheerio');
import { Observable } from 'rxjs';

import { Season, Match, Team } from '@vcalendars/models';

import { Scraper } from '../../scraper';
import ScraperError from '../../common/scraper_error';
import {
  extractDateFromTr,
  extractTeamNamesFromTr,
  extractVenueFromTr,
  extractCourtFromTr,
} from './volleyballsa-extractors';

export class VolleyballSAScraper extends Scraper {
  constructor() {
    super('volleyball-sa');
  }

  private addOrRetrieveTeam(teamName: string, teams: Map<string, Team>): Team {
    let team = teams.get(teamName);
    if (!team) {
      team = new Team();
      team.Name = teamName;
      teams.set(teamName, team);
    }
    return team;
  }

  protected PerformScrape(html: string): Observable<Season> {
    return new Observable(observer => {
      try {
        let season = new Season();
        let $ = Cheerio.load(html);

        let teams: Map<string, Team> = new Map<string, Team>();

        season.name = $('h2').text();

        season.matches = new Array<Match>();
        let d: string = null;
        let round: string = null;
        $('tr').each((index, tr) => {
          let $tr = $(tr);
          switch ($tr.attr('class')) {
            case 'round':
            case 'round past':
              round = $tr.find('th').text();
              break;
            case 'date':
            case 'date past':
              d = $tr.find('th').text();
              break;
            case 'result':
            case 'result last':
            case 'result past':
            case 'result last past':
              let match = new Match();
              match.round = round;
              match.time = extractDateFromTr($.html($tr));
              const { home, away, duty } = extractTeamNamesFromTr($.html($tr));
              if (duty) {
                match.duty = this.addOrRetrieveTeam(duty, teams);
              }
              match.home = this.addOrRetrieveTeam(home, teams);
              match.away = this.addOrRetrieveTeam(away, teams);
              match.venue = extractVenueFromTr($.html($tr));
              match.court = extractCourtFromTr($.html($tr));

              season.matches.push(match);

              break;
          }
        });

        observer.next(season);
        observer.complete();
      } catch (e) {
        observer.error(new ScraperError('', e));
        observer.complete();
      }
    });
  }

  protected DetermineScrapeUrls(
    html: string,
    options: any,
  ): Observable<string> {
    return new Observable(observer => {
      try {
        let $ = Cheerio.load(html);
        $('#fixtures-grade')
          .children('option')
          .each((i, grade) => {
            observer.next(options.baseUrl + $(grade).attr('value'));
          });
        observer.complete();
      } catch (e) {
        observer.error(e);
        observer.complete();
      }
    });
  }
}
