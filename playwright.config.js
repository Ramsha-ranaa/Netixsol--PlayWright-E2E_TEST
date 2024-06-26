const { defineConfig } = require('@playwright/test');
const { Eyes, ClassicRunner, Target } = require('@applitools/eyes-playwright');

// Initialize Eyes with a ClassicRunner
const eyes = new Eyes(new ClassicRunner());

module.exports = defineConfig({
  use: {
    baseURL: 'https://www.skillmatch.tech',
    headless: true, // Set to false if you want to see the browser actions
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    ignoreHTTPSErrors: true,
  },

  // Hooks for Applitools Eyes
  hooks: {
    beforeAll: async () => {
      await eyes.open({
        appName: 'Skillmatch App',
        testName: 'Visual Regression Test',
      });
    },
    afterEach: async ({ page }) => {
      await eyes.check('Page screenshot', Target.window());
    },
    afterAll: async () => {
      await eyes.close();
    },
  },
});
