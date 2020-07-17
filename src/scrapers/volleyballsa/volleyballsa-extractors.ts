import Cheerio = require('cheerio');
import { DateTime } from 'luxon';

import { Season, Match, Event } from '@vcalendars/models/raw';
import ScraperError from '../../common/scraper_error';
import { EventType } from '@vcalendars/models/raw/event';

const DATE_FORMAT = 'MMM d HH:mm';

function loadTr(tr: string) {
  return Cheerio.load(`<table>${tr}</table>`);
}

function parseDate(dateString: string, tz: string) {
  return DateTime.fromFormat(dateString, DATE_FORMAT, {
    zone: tz,
  }).toJSDate();
}

function extractDateStringFromTr(tr: string) {
  const $ = loadTr(tr);
  const dateWithDayName = $('.team-schedule__date').text().trim();
  return dateWithDayName.split(',')[1].trim();
}

export function extractDateTimeFromTr(tr: string, tz: string) {
  try {
    const $ = loadTr(tr);
    const dateString = extractDateStringFromTr(tr);
    const timeString = $('.team-schedule__time')
      .text()
      .trim()
      .replace('am', '')
      .replace('pm', '');
    const dateTimeString = `${dateString} ${timeString}`;
    return parseDate(dateTimeString, tz);
  } catch (e) {
    throw new ScraperError('Error extracting date from <tr>', e, {
      tr,
    });
  }
}

export function extractTeamsFromTr(tr: string) {
  try {
    const $ = loadTr(tr);
    const $versus = $('.team-schedule__versus');
    const $b = $versus.find('b');
    const homeB = $b.eq(0);
    const homeA = homeB.find('a');
    const home = homeA.length > 0 ? homeA.text() : homeB.text();
    const awayB = $b.eq(1);
    const awayA = awayB.find('a');
    const away = awayA.length > 0 ? awayA.text() : awayB.text();

    const duty = $('.team-schedule__duty').text();

    return {
      home: { name: home, isExternal: false },
      away: { name: away, isExternal: false },
      ...(duty && {
        duty: {
          name: duty,
          isExternal: true,
        },
      }),
    };
  } catch (e) {
    throw new ScraperError('Error extracting teams from <tr>', e, {
      tr,
    });
  }
}

function parseVenue(venueString: string) {
  const parts = venueString.split('/');
  return {
    venue: parts[0].trim(),
    court: parts[1].trim(),
  };
}

function extractVenueDetailsFromTr(tr: string) {
  try {
    const $ = loadTr(tr);
    const venueString = $('.team-schedule__venue').text();
    return parseVenue(venueString);
  } catch (e) {
    throw new ScraperError('Error extracting venue details from <tr>', e, {
      tr,
    });
  }
}

export function extractVenueFromTr(tr: string) {
  return extractVenueDetailsFromTr(tr).venue;
}

export function extractCourtFromTr(tr: string) {
  return extractVenueDetailsFromTr(tr).court;
}

export function isTrBye(tr: string) {
  const $ = loadTr(tr);
  const $versus = $('.team-schedule__versus');

  return $versus.text().toLowerCase().indexOf('bye') > 0;
}

function extractDutyFromSmall(small: string, dateString: string, tz: string) {
  const $ = Cheerio.load(small);
  const dutyB = $('b').text();

  const spanText = $('span').html();
  const [timeAndVenue, teams] = spanText.split('<br>');

  const [rawTime, ...venueParts] = timeAndVenue.trim().split(' ');
  const timeString = rawTime.trim().replace('am', '').replace('pm', '');

  const [homeName, awayName] = teams.split(' v');

  return {
    ...parseVenue(venueParts.join(' ')),
    time: parseDate(`${dateString} ${timeString}`, tz),
    home: {
      name: homeName.trim(),
      isExternal: true,
    },
    away: {
      name: awayName.trim(),
      isExternal: true,
    },
    duty: {
      name: dutyB.replace(' Duty:', ''),
      isExternal: false,
    },
  };
}

export function extractDutiesFromTr(tr: string, tz: string) {
  const result = [];
  const $ = loadTr(tr);
  const $versus = $('.team-schedule__versus');
  const $b = $versus.find('b');
  const homeB = $b.eq(0);
  const homeA = homeB.find('a');
  const dateString = extractDateStringFromTr(tr);
  if (homeA.length > 0) {
    const dutyDiv = $(homeA.attr('href'));
    result.push(extractDutyFromSmall(dutyDiv.html(), dateString, tz));
  }
  const awayB = $b.eq(1);
  const awayA = awayB.find('a');
  if (awayA.length > 0) {
    const dutyDiv = $(awayA.attr('href'));
    result.push(extractDutyFromSmall(dutyDiv.html(), dateString, tz));
  }
  return result;
}

export interface Grade {
  name: string;
  id: number;
}
export function extractGradesFromPage(html: string): Grade[] {
  try {
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
  } catch (e) {
    throw new ScraperError('Error extracting grade list from <html>', e, {
      html,
    });
  }
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
  const seasonEvents = new Array<Event>();
  let d: string = null;
  let round: string = null;
  $('tr').each((i, tr) => {
    const $tr = $(tr);
    if (!isTrBye($.html($tr))) {
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
          const match = extractMatchFromTr($.html($tr), round, timezone);
          seasonEvents.push(match);
          const duties = extractDutiesFromTr($.html($tr), timezone).map(
            (duty) => ({
              ...duty,
              type: 'duty' as EventType,
            }),
          );
          seasonEvents.push(...duties);
          break;
      }
    }
  });

  return {
    name: seasonName,
    events: seasonEvents,
  };
}

export function extractMatchFromTr(
  tr: string,
  round: string,
  timezone: string,
): Match {
  return {
    type: 'match',
    round,
    time: extractDateTimeFromTr(tr, timezone),
    ...extractTeamsFromTr(tr),
    venue: extractVenueFromTr(tr),
    court: extractCourtFromTr(tr),
  };
}
