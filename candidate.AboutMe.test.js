import { test, expect } from '@playwright/test';

test.describe('About Me', () => {
  test('Verify About me is saved correctly', async ({ page }) => {

    await page.goto('https://www.skillmatch.tech/signin');
    await page.fill('input[name="email"]', 'f200143@cfd.nu.edu.pk');
    await page.fill('input[name="password"]', 'Tester@12');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();

    await expect(page).toHaveURL('https://www.skillmatch.tech/dashboard/candidate');

    await page.goto('https://www.skillmatch.tech/candidate/my-profile');


    await page.click('svg[class="h-5 w-5 text-secondary"]');



    await page.fill('textarea[id="aboutMe"]', 'This is a test message for About Me.');

   

   
    const textareaValue = await page.$eval('textarea[id="aboutMe"]', textarea => textarea.value);
    expect(textareaValue).toBe('This is a test message for About Me.');
    
    await page.click('button.MuiButton-containedPrimary[type="submit"]');

   
    const dialog = await page.waitForEvent('dialog');

 
    const alertMessage = await dialog.message();


    expect(alertMessage).toContain('Profile updated!!!');



  });
});
