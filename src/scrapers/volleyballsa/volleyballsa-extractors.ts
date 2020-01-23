import Cheerio = require('cheerio');
import * as moment from 'moment';
import { Season, Match } from '@vcalendars/models';

const DATE_FORMAT = 'MMM D HH:mma';

function loadTr(tr: string) {
  return Cheerio.load(`<table>${tr}</table>`);
}

export function extractDateFromTr(tr: string) {
  const $ = loadTr(tr);
  const dateWithDayName = $('.team-schedule__date')
    .text()
    .trim();
  debugger;
  const date = dateWithDayName.split(',')[1].trim();
  const time = $('.team-schedule__time')
    .text()
    .trim();
  const dateString = `${date} ${time}`;
  return moment(dateString, DATE_FORMAT).toDate();
}

export function extractTeamsFromTr(tr: string) {
  const $ = loadTr(tr);
  const $versus = $('.team-schedule__versus');
  const home = $versus
    .find('b')
    .first()
    .text();
  const away = $versus
    .find('b')
    .last()
    .text();
  const duty = $('.team-schedule__duty').text();
  return {
    home: { name: home },
    away: { name: away },
    duty: duty ? { name: duty } : undefined,
  };
}

function extractVenueDetailsFromTr(tr: string) {
  const $ = loadTr(tr);
  const venue = $('.team-schedule__venue')
    .text()
    .split('/');
  return {
    venue: venue[0].trim(),
    court: venue[1].trim(),
  };
}

export function extractVenueFromTr(tr: string) {
  return extractVenueDetailsFromTr(tr).venue;
}

export function extractCourtFromTr(tr: string) {
  return extractVenueDetailsFromTr(tr).court;
}

export interface Grade {
  name: string;
  id: number;
}
export function extractGradesFromPage(html: string): Grade[] {
  const $ = Cheerio.load(html);
  const result: Grade[] = [];
  $('#fixtures-grade')
    .children('option')
    .each((i, grade) => {
      result.push({
        id: parseInt($(grade).attr('value'), 10),
        name: $(grade).text(),
      });
    });
  return result;
}

export interface RawRoundData {
  seasonName: string;
  rawTr: string;
}
export function extractSeasonFromGradePage(gradePage: string): Season {
  const $ = Cheerio.load(gradePage);

  const seasonName = $('h2').text();
  const seasonMatches = new Array<Match>();
  let d: string = null;
  let round: string = null;
  $('tr').each((i, tr) => {
    const $tr = $(tr);

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
        let match = extractMatchFromTr($.html($tr), round);
        seasonMatches.push(match);

        break;
    }
  });

  return {
    name: seasonName,
    matches: seasonMatches,
  };
}

export function extractMatchFromTr(tr: string, round: string): Match {
  return {
    round,
    time: extractDateFromTr(tr),
    ...extractTeamsFromTr(tr),
    venue: extractVenueFromTr(tr),
    court: extractCourtFromTr(tr),
  };
}
