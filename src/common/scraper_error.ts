export default class ScraperError extends Error {
  private context?: any;

  constructor(message: string, error?: any, context?: any) {
    super(message);
    super.stack = error;
    this.context = context;
  }

  toString() {
    return {
      error: super.toString(),
      context: this.context,
    }.toString();
  }
}
