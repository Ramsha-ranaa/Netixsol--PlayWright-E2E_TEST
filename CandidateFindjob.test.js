import { test, expect } from '@playwright/test';

test.describe('Find Job', () => {
  test('Verify find job works correctly', async ({ page }) => {
    // Navigate to the website and login
    await page.goto('https://www.skillmatch.tech/signin');
    await page.fill('input[name="email"]', 'f200143@cfd.nu.edu.pk');
    await page.fill('input[name="password"]', 'Tester@12');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();

    // Navigate to the profile page
    await page.goto('https://www.skillmatch.tech/candidate/my-profile');

    // Navigate to the jobs page
    await page.goto('https://www.skillmatch.tech/candidate/jobs');

    // Click the search input field and enter the job title
    await page.click('input[name="searchValue"]');
    await page.fill('input[name="searchValue"]', 'Sqa Engineer');
    

 // Click on the country field and enter 'Pakistan'
 await page.click('input#country-select-demo');
 await page.fill('input#country-select-demo', 'Pakistan');
 
 await page.click('li#country-select-demo-option-0');

 
 // Click on the city field and enter 'Faisalabad'
 await page.click('input#city');
 await page.fill('input#city', 'Faisalabad');
 
 await page.click('li#city-option-0');

 



    await page.click('button:has-text("Search")');
    
  });
});
