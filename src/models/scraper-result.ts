import { Season } from "./season";

/**
 * The result of a set of scrapes.
 */
export class ScraperResult {
    /** The list of season data successfully scraped */
    seasons: Array<Season>;
}