import { Configuration } from '@vcalendars/models';
import { Scraper } from './scraper';
import { Observable, from } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { Season } from '@vcalendars/models';

// Scrapers
import { VolleyballSAScraper } from './scrapers/volleyballsa/volleyballsa-scraper';

/**
 * Scrape calendar data based on the provided configuration object.
 * @param config The configuration describing which data should be scraped.
 */
export function Scrape(config: Configuration): Observable<Season> {
  return from(config.targets).pipe(
    flatMap(target => {
      const scraper = scrapers.filter(
        scraper => scraper.ScraperName() === target.scraperName,
      )[0];
      const seasons = scraper.PerformScrape(target);
      return seasons;
    }),
  );
}

/**
 * Get a list of all the available scraper functions.
 */
export function AvailableScrapers(): Array<string> {
  return scrapers.map(s => {
    return s.ScraperName();
  });
}

let scrapers: Array<Scraper> = [new VolleyballSAScraper()];
