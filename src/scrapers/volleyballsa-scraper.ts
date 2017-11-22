import { Scraper } from "../scraper";
import { Season } from "../models/season";
import Promise = require("bluebird");

export class VolleyballSAScraper extends Scraper {

    constructor() {
        super("volleyball-sa");
    }

    protected PerformScrape(html: string): Promise<Season> {
        return new Promise((resolve, reject) => {
            try {
                console.log(html);
                throw new Error("Method not implemented.");   
            } catch(e) {
                reject(e);
            }
        });
    }

}