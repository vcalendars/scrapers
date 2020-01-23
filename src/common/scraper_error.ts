export default class ScraperError extends Error {
  constructor(message: string, error?: any) {
    super(message);
    super.stack = error;
  }
}
