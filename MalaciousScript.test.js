import { test, expect } from '@playwright/test';

test.describe('About Me', () => {
  test('Verify About Me and Information Security', async ({ page }) => {
 
    await page.goto('https://www.skillmatch.tech/signin');
    await page.fill('input[name="email"]', 'f200143@cfd.nu.edu.pk');
    await page.fill('input[name="password"]', 'Mrws@4090');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();

  
    await expect(page).toHaveURL('https://www.skillmatch.tech/dashboard/candidate');

   
    await page.goto('https://www.skillmatch.tech/candidate/my-profile');

  
    await page.click('svg[class="h-5 w-5 text-secondary"]');

    const maliciousScript = '<script>alert("This is a malicious script!");</script>';
    await page.fill('textarea[id="aboutMe"]', maliciousScript);

    await page.click('button.MuiButton-containedPrimary[type="submit"]');


 
    const alertMessage = await dialog.message();

   
    expect(alertMessage).not.toContain('malicious script');

    
  });
});
