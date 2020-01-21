import { Season } from '@vcalendars/models';
import axios from 'axios';
import { Observable } from 'rxjs';

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
     * @param baseUrl The url to retrieve the html from.
     * @param options Scraper options provided by configuration
     */
    public Scrape(baseUrl: string, options: any) : Observable<Season> {

        return new Observable<Season>(observer => {
            axios.get(baseUrl).then(baseResponse => {
                // Determine the list of urls to scrape from
                this.DetermineScrapeUrls(baseResponse.data, options).subscribe(u => {
                    console.log("Scraping " + u);
                    axios.get(u).then(response => {
                        // Peform scraper-specific scrape on the html
                        this.PerformScrape(response.data, options).subscribe(s => {
                            observer.next(s);
                        }, e => {
                            observer.error(e);
                        }, () => {
                            console.log("Scrape Completed");
                        });
                    }).catch(e => {
                        observer.error(e);
                    });
                }, e => {
                    observer.error(e);
                }, () => {
                    console.log("All Urls Determined");
                });
            }, e => {
                observer.error(e);
            }).catch(e => {
                observer.error(e);
            });
        });
    }

    /**
     * Scrape the season data from the given html page.
     * @param html The html to extract the season data from
     * @param options Scraper options provided by configuration
     */
    protected abstract PerformScrape(html: string, options: any): Observable<Season>;

    /**
     * Get the list of urls - one for each season for this scraper type.
     * @param html The html of the page containing the season list.
     * @param options Scraper options provided by configuration
     */
    protected abstract DetermineScrapeUrls(html: string, options: any): Observable<string>;

    /**
     * Get the unique identifying name for this scraper.
     */
    public ScraperName(): string {
        return this.scraperName;
    }
}