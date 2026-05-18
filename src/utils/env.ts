/**
 * Environment configuration helper.
 * Reads values from process.env with sensible defaults.
 */
export const env = {
  get baseUrl(): string {
    return process.env.BASE_URL || 'https://example.com';
  },

  get isCI(): boolean {
    return !!process.env.CI;
  },

  get defaultTimeout(): number {
    return Number(process.env.DEFAULT_TIMEOUT) || 30_000;
  },

  get headless(): boolean {
    return process.env.HEADLESS !== 'false';
  },
} as const;
