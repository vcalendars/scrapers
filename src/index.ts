import { Configuration } from '@vcalendars/models';
import { Scraper } from './scraper';
import { Observable } from 'rxjs';
import { Season } from '@vcalendars/models';

// Scrapers
import { VolleyballSAScraper } from './scrapers/volleyballsa/volleyballsa-scraper';

/**
 * Scrape calendar data based on the provided configuration object.
 * @param config The configuration describing which data should be scraped.
 */
export function Scrape(config: Configuration): Observable<Season> {
    return new Observable(observer => {
        var results = config.targets.map(target => {
            let scraper = scrapers.filter(scraper => {
                return scraper.ScraperName() == target.scraperName;
            })[0];
            return scraper.PerformScrape(target);
        });
        var complete = 0;
        results.forEach(r => {
            r.subscribe(r => {
                console.log("Processed Target");
                observer.next(r);
            }, e => {
                console.error(e);
                observer.error(e);
            }, () => {
                console.log("Completed Target");
                complete++;
                if(complete == results.length) {
                    observer.complete();
                }
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
