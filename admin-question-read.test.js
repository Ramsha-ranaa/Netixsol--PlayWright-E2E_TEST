import { test, expect } from '@playwright/test';

test.describe('Test if Admin can read Question', () => {

    test('Verify company login and permissions update', async ({ page }) => {
      
        // Navigate to the sign-in page
        await page.goto('https://staging.skillmatch.tech/signin');

        // Fill in the email and password fields
        await page.fill('input[name="email"]', 'superadmin@gmail.com');
        await page.fill('input[name="password"]', 'password');

        // Click the submit button to log in
        await page.click('button[type="submit"]');

        // Wait for navigation to complete
        await page.waitForNavigation();

        // Click on 'Roles & Permissions'
        await page.locator('text=Roles & Permissions').click();

        // Click on 'Details' for a specific role
        await page.click('a[aria-label="Details"]');

        // Enable permissions (assuming this is a checkbox or similar)
        await page.click('input[name="permissionsAllowed.Questions_read"]');

        // Click on a button to save changes (adjust selector as needed)
        await page.click('.MuiButton-containedPrimary');

        // Assert that a success message or indicator is visible
        await expect(page.locator('text=Roles and Permission is Updated')).toBeTruthy();

        // Log out from the admin account
        await page.click('button#basic-button.relative.cursor-pointer.border-none.bg-transparent.p-0');

        // Click on 'Log out' from the menu (assuming it's a dropdown)
        await page.click('li.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.flex.min-w-[200px].items-center.gap-[8px].px-[14px].py-3.font-epilogue.text-sm.font-semibold:has-text("Log out")');

        // Fill in the admin's email and password for login
        await page.fill('input[name="email"]', 'admin@gmail.com');
        await page.fill('input[name="password"]', '12345678');

        // Click the submit button to log in as admin
        await page.click('button[type="submit"]');

        // Wait for navigation to complete
        await page.waitForNavigation();

        // Assert that after login, the URL is as expected (dashboard URL)
        await expect(page).toHaveURL('https://staging.skillmatch.tech/dashboard/super-admin');
    });
});
