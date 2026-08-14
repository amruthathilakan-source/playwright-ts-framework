import { test, expect } from '../src/fixtures/base.fixture';
import { testData } from '../src/data/testData';

test.describe('Login Page', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('should display the login page', async ({ loginPage }) => {
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();
  });

  // test('should login with valid credentials', async ({ loginPage, page }) => {
  //   await loginPage.login(testData.validUser.username, testData.validUser.password);
  //   await expect(page).toHaveURL(/inventories.html/);
  // });

  // test('should show error with invalid credentials', async ({ loginPage }) => {
  //   await loginPage.login(testData.invalidUser.username, testData.invalidUser.password);
  //   await expect(loginPage.errorMessage).toBeVisible();
  // });
});
