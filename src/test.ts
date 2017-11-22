import * as scraper from './index';
import { Configuration } from './models/configuration';
import { Scrape } from './index';

let runtests = () => {
    let config: Configuration = {
        targets: [
            {
                scraperName: "",
                url: ""
            }
        ]
    };
    Scrape(config).subscribe(s => {
        console.log(s);
    }, e => {
        console.error(e);
    });
}

runtests();