/**
 * Simple logger utility for test output.
 * Replace with a more robust solution (winston, pino) if needed.
 */
export class Logger {
  private context: string;

  constructor(context: string) {
    this.context = context;
  }

  info(message: string, ...args: unknown[]): void {
    console.log(`[INFO] [${this.context}] ${message}`, ...args);
  }

  warn(message: string, ...args: unknown[]): void {
    console.warn(`[WARN] [${this.context}] ${message}`, ...args);
  }

  error(message: string, ...args: unknown[]): void {
    console.error(`[ERROR] [${this.context}] ${message}`, ...args);
  }

  debug(message: string, ...args: unknown[]): void {
    if (process.env.DEBUG) {
      console.debug(`[DEBUG] [${this.context}] ${message}`, ...args);
    }
  }
}
