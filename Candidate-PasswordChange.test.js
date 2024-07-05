import { test, expect } from '@playwright/test';

test.describe('Change Password', () => {
  test('Verify password change functionality', async ({ page }) => {
  
    await page.goto('https://www.skillmatch.tech/signin');
    await page.fill('input[name="email"]', 'f200143@cfd.nu.edu.pk');
    await page.fill('input[name="password"]', 'Tester@12');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();

    await expect(page).toHaveURL('https://www.skillmatch.tech/dashboard/candidate');


    await page.goto('https://www.skillmatch.tech/candidate/settings');


    await page.click('button[id="simple-tab-1"]');

    await page.fill('input[id="oldPassword"]', 'Tester@12');
    await page.fill('input[id="newPassword"]', 'Tester@12');

   
    await page.click('button[type="submit"]');

    
    const alertMessage = await dialog.message();

  
    expect(alertMessage).toContain('Password updated successfully');
  });
});
