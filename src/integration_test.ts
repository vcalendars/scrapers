import { Configuration, Season } from '@vcalendars/models/raw';
import { Scrape } from './index';
import ScraperError from './common/scraper_error';
import { ScrapedSeason } from '@vcalendars/models/processed';

let runtests = () => {
  let config: Configuration = {
    targets: [
      {
        scraperName: 'volleyball-sa',
        url: 'https://www.volleyballsa.com.au/social/indoor/fixtures',
        timezone: 'Australia/Adelaide',
        matchDuration: 60,
        options: {
          baseUrl:
            'https://www.volleyballsa.com.au/social/indoor/fixtures?grade=',
        },
      },
    ],
  };
  Scrape(config).subscribe(
    (s: ScrapedSeason) => {
      console.log(JSON.stringify(s));
    },
    (e: ScraperError) => {
      console.error(e);
    },
    () => {
      console.log('Test Completed');
    },
  );
};

runtests();
