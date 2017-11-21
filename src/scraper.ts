import { Season } from './models/season';

/**
 * Interface describing the behaviour of a single scraper module.
 */
export abstract class Scraper {

    /**
     * Scrape the data found at the provided url.
     * @param url The url to retrieve the html from.
     */
    abstract Scrape(url: string) : ScrapeResult;

    /**
     * Get the unique identifying name for this scraper.
     */
    abstract ScraperName(): string;

}

/**
 * The result of a single scrape.
 */
export class ScrapeResult {
    /** The scraped season (if successfull, null if failed) */
    season: Season;
    /** Errors that occurred (if failed, null if succeeded) */
    errors: Array<string>;
}