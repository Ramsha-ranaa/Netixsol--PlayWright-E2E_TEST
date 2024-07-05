import { test, expect } from '@playwright/test';

test.describe('Skill', () => {
  test('Verify Skill is saved correctly', async ({ page }) => {

    await page.goto('https://www.skillmatch.tech/signin');
    await page.fill('input[name="email"]', 'f200143@cfd.nu.edu.pk');
    await page.fill('input[name="password"]', 'Tester@12');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();

    await page.goto('https://www.skillmatch.tech/candidate/my-profile');
   



    
    await page.click('svg.h-5.w-5.text-secondary');





    await page.fill('input[placeholder="Skill name"]', 'Python');
    
  
    await page.keyboard.press('Enter');

    await page.click('button[type="submit"]:has-text("Save")');

    await page.click('div.m-0.cursor-pointer.pt-1 svg');

    const successMessage = await page.locator('text=Profile Update!!!');
    await expect(successMessage).toBeVisible();
  });
});
