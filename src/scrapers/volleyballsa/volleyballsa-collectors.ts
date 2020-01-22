import { Observable, from } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import axios from 'axios';

import * as extractors from './volleyballsa-extractors';
import { Grade, RawRoundData } from './volleyballsa-extractors';
import { determineGradeUrl } from './volleyballsa-helpers';
import { Season } from '@vcalendars/models';

export function collectGradeList(baseUrl: string): Observable<extractors.Grade> {
  return new Observable(observer => {
    axios.get(baseUrl).then(response => {
      const grades = extractors.extractGradesFromPage(response.data);
      grades.forEach(g => observer.next(g));
      observer.complete();
    });
  });
}

async function collectGradePage(gradeUrl: string): Promise<string> {
  const result = await axios.get(gradeUrl);
  return result.data;
}

export function transformGradesListToGradePages(baseUrl: string) {
  return flatMap((grade: Grade) => {
    const gradeUrl = determineGradeUrl(baseUrl, grade);
    return from(collectGradePage(gradeUrl));
  });
}

export function transformGradePagesToRawRoundData() {
  return flatMap((gradePage: string) => {
    return from(extractors.extractSeasonsFromGradePage(gradePage));
  });
}

export function transformRawRoundDataToSeasons() {
  return map<RawRoundData, Season>((rawRoundData: RawRoundData) => {
    
  });
}
