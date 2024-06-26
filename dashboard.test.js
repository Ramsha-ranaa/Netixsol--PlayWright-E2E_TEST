const { test, expect } = require('@playwright/test');

test.describe('Candidate Dashboard', () => {
  test('should log in successfully', async ({ page }) => {
    await page.goto('https://www.skillmatch.tech/signin');
    await page.fill('input[name="email"]', 'f200143@cfd.nu.edu.pk');
    await page.fill('input[name="password"]', 'Mrws@4090');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();
    await expect(page).toHaveURL('https://www.skillmatch.tech/dashboard/candidate');
  });

  test('should have functional buttons after login', async ({ page }) => {
    // Ensure logged in and on the dashboard
    await page.goto('https://www.skillmatch.tech/signin');
    await page.fill('input[name="email"]', 'f200143@cfd.nu.edu.pk');
    await page.fill('input[name="password"]', 'Mrws@4090');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();
    await expect(page).toHaveURL('https://www.skillmatch.tech/dashboard/candidate');

    // Check all buttons are enabled
    const buttons = await page.locator('button');
    for (let i = 0; i < await buttons.count(); i++) {
      await expect(buttons.nth(i)).toBeEnabled();
    }
  });

  test('Find Jobs Button Test', async ({ page }) => {
    // Ensure logged in and on the dashboard
    await page.goto('https://www.skillmatch.tech/signin');
    await page.fill('input[name="email"]', 'f200143@cfd.nu.edu.pk');
    await page.fill('input[name="password"]', 'Mrws@4090');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();
    await expect(page).toHaveURL('https://www.skillmatch.tech/dashboard/candidate');

    // Find the button using its label text
    const findJobsButton = await page.locator('button:has-text("Find Jobs")');

    // Click the button
    await findJobsButton.click();

    // Wait for navigation or other expected behavior
    await page.waitForNavigation();

    // Assert navigation to the correct page
    await expect(page).toHaveURL('https://www.skillmatch.tech/candidate/jobs');
  });

});