import { Season } from './models/season';
import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import { Observable } from 'rxjs/Observable';

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
    public Scrape(url: string) : Observable<Season> {

        return new Observable<Season>(observer => {
            axios.get(url).then(response => {
                // Peform scraper-specific scrape on the html
                this.PerformScrape(response.data).subscribe(s => {
                    observer.next(s);
                }, e => {
                    observer.error(e);
                }, () => {
                    observer.complete();
                });
            }, e => {
                observer.error(e);
            });
        });
    }

    protected abstract PerformScrape(html: string): Observable<Season>;

    /**
     * Get the unique identifying name for this scraper.
     */
    public ScraperName(): string {
        return this.scraperName;
    }
}