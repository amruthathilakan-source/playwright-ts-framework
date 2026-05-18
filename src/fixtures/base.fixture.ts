import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

/**
 * Custom fixtures extend the base test with pre-configured page objects.
 * Add more page objects here as your framework grows.
 */
type PageFixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});

export { expect } from '@playwright/test';
