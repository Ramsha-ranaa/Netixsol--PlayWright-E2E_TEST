import { test, expect } from '@playwright/test';

test.describe('Skill', () => {
  test('Verify Skill is saved correctly', async ({ page }) => {
    // Navigate to the website and login
    await page.goto('https://www.skillmatch.tech/signin');
    await page.fill('input[name="email"]', 'f200143@cfd.nu.edu.pk');
    await page.fill('input[name="password"]', 'Tester@12');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();

    // Navigate to the profile page
    await page.goto('https://www.skillmatch.tech/candidate/my-profile');
   



    
    await page.click('svg.h-5.w-5.text-secondary');




    // Click the input field and enter the skill name
    await page.fill('input[placeholder="Skill name"]', 'Python');
    
    // Select the skill from the dropdown (if needed)
    await page.keyboard.press('Enter');

    // Click the save button
    await page.click('button[type="submit"]:has-text("Save")');

    // Optionally, close the modal or confirm the success message
    await page.click('div.m-0.cursor-pointer.pt-1 svg');

    // Verify the success message
    const successMessage = await page.locator('text=Profile Update!!!');
    await expect(successMessage).toBeVisible();
  });
});
