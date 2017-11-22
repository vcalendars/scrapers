import { Scraper } from "../scraper";
import { Season } from "../models/season";
import Promise = require("bluebird");
import { Observable } from "rxjs/Observable";

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

}