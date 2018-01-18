import { Scraper } from "../scraper";
import { Season } from "../models/season";
import Promise = require("bluebird");
import { Observable } from "rxjs/Observable";
import Cheerio = require('cheerio');
import { Match } from "../models/match";
import * as moment from "moment";
import { Team } from "../models/team";

export class VolleyballSAScraper extends Scraper {

    private DATE_FORMAT = 'dddd Do MMMM YYYY HH:mma';

    constructor() {
        super("volleyball-sa");
    }

    private addOrRetrieveTeam(teamName: string, teams: Map<string, Team>): Team {
        let team = teams.get(teamName);
        if(!team) {
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

                season.name = $("h2").text();

                season.matches = new Array<Match>();
                let d: string = null;
                let round: string = null;
                $("tr").each((index, tr) => {
                    let $tr = $(tr);
                    switch($tr.attr('class')) {
                        case "round":
                        case "round past":
                            round = $tr.find("th").text();
                            break;
                        case "date":
                        case "date past":
                            d = $tr.find("th").text();
                            break;
                        case "result":
                        case "result last":
                        case "result past":
                            let $details = $tr.children().first();

                            let match = new Match();

                            match.round = round;
                            match.duty = this.addOrRetrieveTeam($details.find('.note').text(), teams);

                            let tString = $details.text().replace(match.duty.Name, "");
                            let tStrings = tString.split(' v ');
                            match.home = this.addOrRetrieveTeam(tStrings[0], teams);
                            match.away = this.addOrRetrieveTeam(tStrings[1], teams);

                            let $element = $details.next().next();
                            let lString = $element.text();
                            let lStrings = lString.split(" / ")
                            match.venue = lStrings[0];
                            match.court = lStrings[1];

                            let dString = $element.next().text();
                            dString = d + " " + dString;
                            match.time = moment(dString, this.DATE_FORMAT).toDate();

                            season.matches.push(match);

                            break;
                    }
                });

                observer.next(season);
                observer.complete();
            } catch(e) {
                observer.error(e);
                observer.complete();
            }
        });
    }

    protected DetermineScrapeUrls(html: string, options: any): Observable<string> {
        return new Observable(observer => {
            try {
                let $ = Cheerio.load(html);
                $("#fixtures-grade").children("option").each((i, grade) => {
                    observer.next(options.baseUrl + $(grade).attr("value"));
                });
                observer.complete();
            } catch(e) {
                observer.error(e);
                observer.complete();
            }
        });
    }
}