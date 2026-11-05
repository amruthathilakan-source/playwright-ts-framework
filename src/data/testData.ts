/**
 * Centralized test data. Keep credentials and sensitive data in .env files,
 * not here. This file is for non-sensitive, reusable test inputs.
 */
export const testData = {
  validUser: {
    username: process.env.TEST_USERNAME || 'standard_user',
    password: process.env.TEST_PASSWORD || 'secret_sauce',
  },
  invalidUser: {
    username: 'invalid_user',
    password: 'wrong_password',
  },
  urls: {
    login: '/login',
    dashboard: '/dashboard',
    profile: '/profile',
  },
} as const;
