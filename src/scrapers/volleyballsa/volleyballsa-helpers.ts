import { Grade } from './volleyballsa-extractors';

export function determineGradeUrl(baseUrl: string, grade: Grade) {
  return `${baseUrl}?grade=${grade.id}`;
}
