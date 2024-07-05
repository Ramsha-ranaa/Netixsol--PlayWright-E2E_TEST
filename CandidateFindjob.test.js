import { test, expect } from '@playwright/test';

test.describe('Find Job', () => {
  test('Verify find job works correctly', async ({ page }) => {

    await page.goto('https://www.skillmatch.tech/signin');
    await page.fill('input[name="email"]', 'f200143@cfd.nu.edu.pk');
    await page.fill('input[name="password"]', 'Tester@12');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();

    
    await page.goto('https://www.skillmatch.tech/candidate/my-profile');

 
    await page.goto('https://www.skillmatch.tech/candidate/jobs');

  
    await page.click('input[name="searchValue"]');
    await page.fill('input[name="searchValue"]', 'Sqa Engineer');
    


 await page.click('input#country-select-demo');
 await page.fill('input#country-select-demo', 'Pakistan');
 
 await page.click('li#country-select-demo-option-0');


 await page.click('input#city');
 await page.fill('input#city', 'Faisalabad');
 
 await page.click('li#city-option-0');

 



    await page.click('button:has-text("Search")');
    
  });
});
