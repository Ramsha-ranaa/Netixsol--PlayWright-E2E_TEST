import { test, expect } from '@playwright/test';

test.describe('Experience', () => {
  test('Verify experience  are saved correctly', async ({ page }) => {
   
    await page.goto('https://www.skillmatch.tech/signin');
    await page.fill('input[name="email"]', 'f200143@cfd.nu.edu.pk');
    await page.fill('input[name="password"]', 'Tester@12');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();

    await expect(page).toHaveURL('https://www.skillmatch.tech/dashboard/candidate');

    
    await page.goto('https://www.skillmatch.tech/candidate/my-profile');

  
    await page.click('svg[data-testid="AddOutlinedIcon"]');

    
    await page.fill('input[placeholder="Enter Your Experience Title Here"]', 'Software Engineer');


    await page.click('div[id="employmentType"]');
    await page.waitForSelector('.MuiList-root');
    await page.click('li[data-value="fulltime"]');
    await page.waitForTimeout(500);
    const selectedEmploymentType = await page.$eval('#employmentType', el => el.textContent.trim());
    expect(selectedEmploymentType).toBe('Full-Time');

 
    await page.fill('input[placeholder="Enter Company Name"]', 'Netixsol');


    await page.click('input[placeholder="Choose a country"]');
    await page.type('input[placeholder="Choose a country"]', 'Pakistan');
    await page.waitForSelector('.MuiAutocomplete-option');
    await page.click('.MuiAutocomplete-option');
    await page.waitForSelector('input[placeholder="Choose a country"][value="Pakistan"]');
    const selectedCountry = await page.$eval('input[placeholder="Choose a country"]', el => el.value.trim());
    expect(selectedCountry).toBe('Pakistan');

    await page.click('input[placeholder="Choose a city"]');
    await page.type('input[placeholder="Choose a city"]', 'Faisalabad');
    await page.waitForSelector('.MuiAutocomplete-option');
    await page.click('.MuiAutocomplete-option');
    await page.waitForSelector('input[placeholder="Choose a city"][value="Faisalabad"]');
    const selectedCity = await page.$eval('input[placeholder="Choose a city"]', el => el.value.trim());
    expect(selectedCity).toBe('Faisalabad');


    await page.click('div[id="jobType"]');
    await page.waitForSelector('.MuiList-root');
    await page.click('li[data-value="onsite"]');
    await page.waitForTimeout(500); 
    const selectedJobType = await page.$eval('#jobType', el => el.textContent.trim());
    expect(selectedJobType).toBe('Onsite');

    await page.check('input.PrivateSwitchBase-input[name="currentlyWorking"]');
    const isChecked = await page.$eval('input.PrivateSwitchBase-input[name="currentlyWorking"]', el => el.checked);
    expect(isChecked).toBe(true);

    const startDate = '2022-01-01'; 
    await page.fill('input#startDate', startDate);
    await page.waitForSelector(`input#startDate[value="${startDate}"]`);
    const selectedStartDate = await page.$eval('input#startDate', el => el.value);
    expect(selectedStartDate).toBe(startDate);

    await page.waitForSelector('textarea#description');

    await page.fill('textarea#description', '');


    await page.fill('textarea#description', 'Hi, It\'s my testcase');

  
    await page.click('input#startDate'); 

    await page.waitForTimeout(500);


    await page.click('button.MuiButton-containedPrimary');

    
    const successMessageSelector = 'div.success-message';
    try {
      await page.waitForSelector(successMessageSelector, { timeout: 5000 });
      const successMessage = await page.textContent(successMessageSelector);
      expect(successMessage).toContain('Experience updated successfully');
    } catch (error) {
      console.error('Failed to find success message:', error);
    
    }
  });
});
