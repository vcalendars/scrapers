import { Configuration, Season } from '@vcalendars/models';
import { Scrape } from './index';
import ScraperError from './common/scraper_error';

let runtests = () => {
  let config: Configuration = {
    targets: [
      {
        scraperName: 'volleyball-sa',
        url: 'https://www.volleyballsa.com.au/social/indoor/fixtures',
        options: {
          baseUrl:
            'https://www.volleyballsa.com.au/social/indoor/fixtures?grade=',
        },
      },
    ],
  };
  Scrape(config).subscribe(
    (s: Season) => {
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
