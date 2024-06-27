import { test, expect } from '@playwright/test';

test.describe('About Me', () => {
  test('Verify About me is saved correctly', async ({ page }) => {
    // Navigate to the website and login
    await page.goto('https://www.skillmatch.tech/signin');
    await page.fill('input[name="email"]', 'f200143@cfd.nu.edu.pk');
    await page.fill('input[name="password"]', 'Mrws@4090');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();

    // Verify if redirected to the dashboard
    await expect(page).toHaveURL('https://www.skillmatch.tech/dashboard/candidate');

    // Navigate to the profile page
    await page.goto('https://www.skillmatch.tech/candidate/my-profile');

    // Click on the "Add Description" button
    await page.click('svg[class="h-5 w-5 text-secondary"]');



    await page.fill('textarea[id="aboutMe"]', 'This is a test message for About Me.');

    // Optionally, you can clear the text if needed
    // await page.fill('textarea[id="aboutMe"]', '');

    // Verify the text has been filled in (optional)
    const textareaValue = await page.$eval('textarea[id="aboutMe"]', textarea => textarea.value);
    expect(textareaValue).toBe('This is a test message for About Me.');
    
    // Add further interactions or assertions as needed
    await page.click('button.MuiButton-containedPrimary[type="submit"]');

    // Wait for the alert dialog to appear
    const dialog = await page.waitForEvent('dialog');

    // Extract the text from the alert dialog
    const alertMessage = await dialog.message();

    // Assert that the alert message contains "Profile updated!"
    expect(alertMessage).toContain('Profile updated!!!');



  });
});
