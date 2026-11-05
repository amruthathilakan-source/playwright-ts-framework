import { test, expect } from '../src/fixtures/base.fixture';
import { testData } from '../src/data/testData';

test.describe('Login Page', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('should login with valid credentials', async ({ loginPage , page }) => {
    await loginPage.login(testData.validUser.username, testData.validUser.password);
    await expect(page).toHaveURL(/inventories.html/);
  });




});