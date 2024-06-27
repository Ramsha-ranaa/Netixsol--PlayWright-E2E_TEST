import { test, expect } from '@playwright/test';

test.describe('About Me', () => {
  test('Verify About Me and Information Security', async ({ page }) => {
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

    // Inject potentially malicious script content
    const maliciousScript = '<script>alert("This is a malicious script!");</script>';
    await page.fill('textarea[id="aboutMe"]', maliciousScript);

    // Click the Save button
    await page.click('button.MuiButton-containedPrimary[type="submit"]');


    // Extract the text from the alert dialog
    const alertMessage = await dialog.message();

    // Assert that the alert message does not contain the malicious script content
    expect(alertMessage).not.toContain('malicious script');

    
  });
});
