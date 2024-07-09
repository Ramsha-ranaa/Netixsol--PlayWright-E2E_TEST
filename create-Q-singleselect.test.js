import { test, expect } from '@playwright/test';

test.describe('Creating Single Select Question', () => {

    test('Create single select question', async ({ page }) => {
      
        // Navigate to the sign-in page
        await page.goto('https://staging.skillmatch.tech/signin');

        // Fill in the email and password fields
        await page.fill('input[name="email"]', 'superadmin@gmail.com');
        await page.fill('input[name="password"]', 'password');

        // Click the submit button to log in
        await page.click('button[type="submit"]');

        // Wait for navigation to complete
      
        // Navigate to the questions page
        //await page.goto('https://staging.skillmatch.tech/super-admin/questions');
       await page.click('a[href="/super-admin/questions"]');


        // Wait for the 'Create Questions' button to be visible
        await page.waitForSelector('button:has-text("Create Questions")');


        // Click the 'Create Questions' button
        await page.click('button:has-text("Create Questions")');

        // Wait for the page to load after clicking 'Create Questions'
        await page.click('div.false:has(button.border-neutral-800) >> div:has-text("Single select")');

               // Click on the <p> element containing <br>
await page.click('p[data-mce-bogus="1"]');

// Type 'write' into the clicked element
await page.keyboard.type('write');
    });

});
