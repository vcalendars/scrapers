import { Observable, from } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import axios from 'axios';

import { Target } from '@vcalendars/models/raw';

import * as extractors from './volleyballsa-extractors';
import { Grade } from './volleyballsa-extractors';
import { determineGradeUrl } from './volleyballsa-helpers';

export function collectGradeList(
  baseUrl: string,
): Observable<extractors.Grade> {
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

export function transformGradePagesToScrapedSeasons(sourceTarget: Target) {
  return map((gradePage: string) => {
    const season = extractors.extractSeasonFromGradePage(
      gradePage,
      sourceTarget.timezone,
    );
    return {
      season,
      sourceTarget,
    };
  });
}
