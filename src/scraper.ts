import { Season, Target } from '@vcalendars/models';
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
   * Scrape all the seasons from the given target.
   * @param target Details about the target to scrape.
   */
  public abstract PerformScrape(target: Target): Observable<Season>;

  /**
   * Get the unique identifying name for this scraper.
   */
  public ScraperName(): string {
    return this.scraperName;
  }
}
