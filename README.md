# Playwright TypeScript Framework

A scalable test automation framework built with Playwright and TypeScript using the Page Object Model pattern.

## Project Structure

```
├── playwright.config.ts       # Playwright configuration
├── tsconfig.json              # TypeScript configuration
├── src/
│   ├── pages/                 # Page Object Models
│   │   ├── BasePage.ts        # Common page interactions
│   │   └── LoginPage.ts      # Login page object (sample)
│   ├── fixtures/              # Custom test fixtures
│   │   └── base.fixture.ts   # Extends Playwright with page objects
│   ├── utils/                 # Utilities
│   │   ├── env.ts            # Environment config helper
│   │   └── logger.ts         # Logging utility
│   └── data/                  # Test data
│       └── testData.ts        # Centralized test inputs
├── tests/                     # Test specs
│   └── login.spec.ts          # Sample login tests
└── .env.example               # Environment variable template
```

## Getting Started

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Copy env template and configure
cp .env.example .env
```

## Running Tests

```bash
# Run all tests
npm test

# Run in a specific browser
npm run test:chromium
npm run test:firefox
npm run test:webkit

# Run in headed mode (see the browser)
npm run test:headed

# Debug mode (step through tests)
npm run test:debug

# Interactive UI mode
npm run test:ui

# Generate tests with codegen
npm run codegen
```

## Viewing Reports

```bash
npm run report
```

## Adding a New Page Object

1. Create a new file in `src/pages/` extending `BasePage`:

```typescript
import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  readonly heading: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = page.locator('h1');
  }

  async goto(): Promise<void> {
    await this.navigate('/dashboard');
  }
}
```

2. Register it in `src/fixtures/base.fixture.ts`:

```typescript
import { DashboardPage } from '../pages/DashboardPage';

type PageFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
};
```

3. Use it in your tests via the fixture:

```typescript
test('should show dashboard', async ({ dashboardPage }) => {
  await dashboardPage.goto();
  await expect(dashboardPage.heading).toHaveText('Welcome');
});
```

## CI Integration

The config is CI-aware out of the box. Set `CI=true` in your pipeline environment to enable:
- Single worker execution
- 2 retries on failure
- `forbidOnly` to prevent `.only` from leaking into CI
