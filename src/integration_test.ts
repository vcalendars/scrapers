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
        options: {
          competitionName: 'Volleyball SA Indoor',
          timezone: 'Australia/Adelaide',
          matchDuration: 60,
        },
      },
      // State League Indoor
      {
        scraperName: 'volleyball-sa',
        url: 'https://www.volleyballsa.com.au/savl/fixtures',
        options: {
          competitionName: 'Volleyball SA State League',
          timezone: 'Australia/Adelaide',
          matchDuration: 60,
        },
      },
      // Social Beach
      {
        scraperName: 'volleyball-sa',
        url: 'https://www.volleyballsa.com.au/social/beach/fixtures',
        options: {
          competitionName: 'Volleyball SA Beach',
          timezone: 'Australia/Adelaide',
          matchDuration: 60,
        },
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
