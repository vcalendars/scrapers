import { Observable } from 'rxjs';
import axios from 'axios';

import * as extractors from './volleyballsa-extractors';

export function collectGrades(baseUrl: string): Observable<extractors.Grade> {
  return new Observable(observer => {
    axios.get(baseUrl).then(response => {
      const grades = extractors.extractGradesFromPage(response.data);
      grades.forEach(g => observer.next(g));
      observer.complete();
    });
  });
}
