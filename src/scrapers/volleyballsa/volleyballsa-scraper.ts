import { Observable } from 'rxjs';

import { Season, Target } from '@vcalendars/models';

import { Scraper } from '../../scraper';
import * as collectors from './volleyballsa-collectors';

export class VolleyballSAScraper extends Scraper {
  constructor() {
    super('volleyball-sa');
  }

  public PerformScrape(target: Target): Observable<Season> {
    return collectors
      .collectGradeList(target.url)
      .pipe(
        collectors.transformGradesListToGradePages(target.url),
        collectors.transformGradePagesToSeasons(target.timezone),
      );
  }
}
