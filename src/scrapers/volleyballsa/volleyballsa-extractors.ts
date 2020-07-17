import Cheerio = require('cheerio');
import { DateTime } from 'luxon';
import { Season, Match } from '@vcalendars/models/raw';

const DATE_FORMAT = 'MMM d HH:mm';

function loadTr(tr: string) {
  return Cheerio.load(`<table>${tr}</table>`);
}

export function extractDateFromTr(tr: string, tz: string) {
  const $ = loadTr(tr);
  const dateWithDayName = $('.team-schedule__date')
    .text()
    .trim();
  const date = dateWithDayName.split(',')[1].trim();
  const time = $('.team-schedule__time')
    .text()
    .trim()
    .replace('am', '')
    .replace('pm', '');
  const dateString = `${date} ${time}`;
  return DateTime.fromFormat(dateString, DATE_FORMAT, {
    zone: tz,
  }).toJSDate();
}

export function extractTeamsFromTr(tr: string) {
  const $ = loadTr(tr);
  const $versus = $('.team-schedule__versus');
  const $b = $versus.find('b')
  const homeB = $b.eq(0);
  const homeA = homeB.find('a');
  const home = homeA.length > 0 ? homeA.text() : homeB.text();
  const awayB = $b.eq(1);
  const awayA = awayB.find('a');
  const away = awayA.length > 0 ? awayA.text() : awayB.text();
  return {
    home: { name: home },
    away: { name: away },
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
export function extractSeasonFromGradePage(
  gradePage: string,
  timezone: string,
): Season {
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
        let match = extractMatchFromTr($.html($tr), round, timezone);
        seasonMatches.push(match);

        break;
    }
  });

  return {
    name: seasonName,
    matches: seasonMatches,
  };
}

export function extractMatchFromTr(
  tr: string,
  round: string,
  timezone: string,
): Match {
  return {
    round,
    time: extractDateFromTr(tr, timezone),
    ...extractTeamsFromTr(tr),
    venue: extractVenueFromTr(tr),
    court: extractCourtFromTr(tr),
  };
}
