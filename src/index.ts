import { Configuration, Target } from './models/configuration';
import { Scraper } from './scraper';
import { Observable } from 'rxjs/Observable';
import { Season } from './models/season';

// Scrapers
import { VolleyballSAScraper } from './scrapers/volleyballsa-scraper';

/**
 * Scrape calendar data based on the provided configuration object.
 * @param config The configuration describing which data should be scraped.
 */
export function Scrape(config: Configuration): Observable<Season> {
    return new Observable(observer => {
        var results = config.targets.map(t => {
            let scraper = scrapers.filter(s => {
                return s.ScraperName() == t.scraperName;
            })[0];
            return scraper.Scrape(t.url);
        });
        results.forEach(r => {
            r.then(result =>  {
                observer.next(result);
            }, error => {
                observer.error(error);
            });
        });
    });
}

/**
 * Get a list of all the available scraper functions.
 */
export function AvailableScrapers(): Array<string> {
    return scrapers.map(s => {
        return s.ScraperName();
    });
}

let scrapers: Array<Scraper> = [
    new VolleyballSAScraper()
];
