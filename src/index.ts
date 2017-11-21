import { Configuration } from './models/configuration';
import { Scraper } from './scraper';
import { ScraperResult } from './models/scraper-result';

/**
 * Scrape calendar data based on the provided configuration object.
 * @param config The configuration describing which data should be scraped.
 */
export function Scrape(config: Configuration): ScraperResult {
    var results = config.targets.map(t => {
        let scraper = scrapers.filter(s => {
            return s.ScraperName() == t.scraperName;
        })[0];
        return scraper.Scrape(t.url);
    });
    var result = new ScraperResult();
    result.seasons = results.filter(r => r.season !== null).map(s => {
        return s.season;
    });
    return result;
}

/**
 * Get a list of all the available scraper functions.
 */
export function AvailableScrapers(): Array<string> {
    return scrapers.map(s => {
        return s.ScraperName();
    });
}

let scrapers: Array<Scraper> = [];