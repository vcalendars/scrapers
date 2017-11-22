import { Scraper } from "../scraper";
import { Season } from "../models/season";
import Promise = require("bluebird");
import { Observable } from "rxjs/Observable";
import Cheerio = require('cheerio');

export class VolleyballSAScraper extends Scraper {

    constructor() {
        super("volleyball-sa");
    }

    protected PerformScrape(html: string): Observable<Season> {
        return new Observable(observer => {
            try {
                observer.next(new Season());
                observer.complete();
            } catch(e) {
                observer.error(e);
                observer.complete();
            }
        });
    }

    protected DetermineScrapeUrls(html: string, options: any): Observable<string> {
        return new Observable(observer => {
            try {
                var $ = Cheerio.load(html);
                $("#fixtures-grade").children("option").each((i, grade) => {
                    observer.next(options.baseUrl + $(grade).attr("value"));
                });
                observer.complete();
            } catch(e) {
                observer.error(e);
                observer.complete();
            }
        });
    }
}