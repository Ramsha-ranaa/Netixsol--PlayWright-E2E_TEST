import { test, expect } from '@playwright/test';

test.describe('Change Password', () => {
  test('Verify password change functionality', async ({ page }) => {
    // Navigate to the website and login
    await page.goto('https://www.skillmatch.tech/signin');
    await page.fill('input[name="email"]', 'f200143@cfd.nu.edu.pk');
    await page.fill('input[name="password"]', 'Ramsha@12');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();

    // Verify if redirected to the dashboard
    await expect(page).toHaveURL('https://www.skillmatch.tech/dashboard/candidate');

    // Navigate to the profile page
    await page.goto('https://www.skillmatch.tech/candidate/settings');

    // Click the "Login Details" button
    await page.click('button[id="simple-tab-1"]');

    // Fill in the old password and new password fields
    await page.fill('input[id="oldPassword"]', 'Ramsha@12');
    await page.fill('input[id="newPassword"]', 'Tester@12');

    // Click the "Change Password" button
    await page.click('button[type="submit"]');

    // Wait for the alert message
    
    const alertMessage = await dialog.message();

    // Assert that the alert message contains "Password updated successfully"
    expect(alertMessage).toContain('Password updated successfully');
  });
});
