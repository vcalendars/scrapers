import * as scraper from './index';
import { Configuration } from './models/configuration';
import { Scrape } from './index';

let runtests = () => {
    let config: Configuration = {
        targets: [
            {
                scraperName: "volleyball-sa",
                url: "http://www.volleyballsa.com.au/recfixturestest/fixtures",
                options: {
                    baseUrl: "http://www.volleyballsa.com.au/recfixturestest/fixtures?grade="
                }
            }
        ]
    };
    Scrape(config).subscribe(s => {
        console.log(s);
    }, e => {
        console.error(e);
    }, () => {
        console.log("Test Completed");
    });
}

runtests();