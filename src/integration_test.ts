import { Configuration, Season } from '@teamest/models/raw';
import { Scrape } from './index';
import ScraperError from './common/scraper_error';
import { ScrapedSeason } from '@teamest/models/processed';

let runtests = () => {
  let config: Configuration = {
    targets: [
      // Social Indoor
      {
        scraperName: 'volleyball-sa',
        url: 'https://www.volleyballsa.com.au/social/indoor/fixtures',
        timezone: 'Australia/Adelaide',
        matchDuration: 60,
        options: {},
      },
      // State League Indoor
      {
        scraperName: 'volleyball-sa',
        url: 'https://www.volleyballsa.com.au/savl/fixtures',
        timezone: 'Australia/Adelaide',
        matchDuration: 60,
        options: {},
      },
      // Social Beach
      {
        scraperName: 'volleyball-sa',
        url: 'https://www.volleyballsa.com.au/social/beach/fixtures',
        timezone: 'Australia/Adelaide',
        matchDuration: 60,
        options: {},
      }
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
