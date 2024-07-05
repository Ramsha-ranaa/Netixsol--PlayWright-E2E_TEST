import { test, expect } from '@playwright/test';

test.describe('Change Password', () => {
  test('Verify password change functionality', async ({ page }) => {

    await page.goto('https://www.skillmatch.tech/signin');
    await page.fill('input[name="email"]', 'f200143@cfd.nu.edu.pk');
    await page.fill('input[name="password"]', 'Tester@12');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();

 
    await expect(page).toHaveURL('https://www.skillmatch.tech/dashboard/candidate');

 
    await page.goto('https://www.skillmatch.tech/candidate/jobs#');

   
    await page.click('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary w-[126px] rounded-full bg-secondary px-6 py-3 shadow-none hover:bg-secondary css-12xf99b"]');

    await page.click('a[href="/candidate/jobs#"]:has-text("Terms of Service")');

    await page.click('a[href="/candidate/jobs#"]:has-text("Privacy Policy")');


  });
});
