import { Configuration } from "@vcalendars/models";
import { Scrape } from "./index";

let runtests = () => {
  let config: Configuration = {
    targets: [
      {
        scraperName: "volleyball-sa",
        url: "https://www.volleyballsa.com.au/social/indoor/fixtures",
        options: {
          baseUrl:
            "https://www.volleyballsa.com.au/social/indoor/fixtures?grade="
        }
      }
    ]
  };
  Scrape(config).subscribe(
    s => {
      console.log(JSON.stringify(s));
    },
    e => {
      console.error(e);
    },
    () => {
      console.log("Test Completed");
    }
  );
};

runtests();
