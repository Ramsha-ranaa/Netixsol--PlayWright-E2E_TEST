const { test, expect } = require('@playwright/test');

test.describe('Candidate Dashboard', () => {
  test('should log in successfully', async ({ page }) => {
    await page.goto('https://www.skillmatch.tech/signin');
    await page.fill('input[name="email"]', 'f200143@cfd.nu.edu.pk');
    await page.fill('input[name="password"]', 'Tester@12');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();
    await expect(page).toHaveURL('https://www.skillmatch.tech/dashboard/candidate');
  });

  test('should have functional buttons after login', async ({ page }) => {

    await page.goto('https://www.skillmatch.tech/signin');
    await page.fill('input[name="email"]', 'f200143@cfd.nu.edu.pk');
    await page.fill('input[name="password"]', 'Mrws@4090');
    await page.click('button[type="submit"]');
   


    const buttons = await page.locator('button');
    for (let i = 0; i < await buttons.count(); i++) {
      await expect(buttons.nth(i)).toBeEnabled();
    }
  });

  test('Find Jobs Button Test', async ({ page }) => {

    await page.goto('https://www.skillmatch.tech/signin');
    await page.fill('input[name="email"]', 'f200143@cfd.nu.edu.pk');
    await page.fill('input[name="password"]', 'Tester@12');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();
    await expect(page).toHaveURL('https://www.skillmatch.tech/dashboard/candidate');


    const findJobsButton = await page.locator('button:has-text("Find Jobs")');

    await findJobsButton.click();

    await page.waitForNavigation();

    await expect(page).toHaveURL('https://www.skillmatch.tech/candidate/jobs');
  });

});