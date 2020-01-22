import Cheerio = require('cheerio');
import * as moment from 'moment';

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

export function extractTeamNamesFromTr(tr: string) {
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
    home,
    away,
    duty,
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
