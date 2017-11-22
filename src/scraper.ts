import { Season } from './models/season';
import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import Promise = require("bluebird");

/**
 * Interface describing the behaviour of a single scraper module.
 */
export abstract class Scraper {

    scraperName: string;

    constructor(scraperName: string) {
        this.scraperName = scraperName;
    }

    /**
     * Scrape the data found at the provided url.
     * @param url The url to retrieve the html from.
     */
    public Scrape(url: string) : Promise<Season> {

        return new Promise<Season>((resolve, reject) => {
            axios.get(url).then(response => {
                // Peform scraper-specific scrape on the html
                this.PerformScrape(response.data).then(sr => {
                    resolve(sr);
                }, err => {
                    reject(err);
                });
            }, e => {
                reject(e);
            });
        });
    }

    protected abstract PerformScrape(html: string): Promise<Season>;

    /**
     * Get the unique identifying name for this scraper.
     */
    public ScraperName(): string {
        return this.scraperName;
    }
}