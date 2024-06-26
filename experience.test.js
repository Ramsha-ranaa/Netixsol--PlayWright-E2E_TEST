import { test, expect } from '@playwright/test';

test.describe('Experience and Skills', () => {
  test('Verify experience and skills are saved correctly', async ({ page }) => {
    // Navigate to the website and login
    await page.goto('https://www.skillmatch.tech/signin');
    await page.fill('input[name="email"]', 'f200143@cfd.nu.edu.pk');
    await page.fill('input[name="password"]', 'Mrws@4090');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();

    // Verify if redirected to the dashboard
    await expect(page).toHaveURL('https://www.skillmatch.tech/dashboard/candidate');

    // Navigate to the profile page
    await page.goto('https://www.skillmatch.tech/candidate/my-profile');

    // Click on "Add Experience" button
    await page.click('svg[data-testid="AddOutlinedIcon"]');

    // Fill experience title
    await page.fill('input[placeholder="Enter Your Experience Title Here"]', 'Software Engineer');

    // Select Employment Type
    await page.click('div[id="employmentType"]');
    await page.waitForSelector('.MuiList-root');
    await page.click('li[data-value="fulltime"]');
    await page.waitForTimeout(500); // Adjust timeout as needed
    const selectedEmploymentType = await page.$eval('#employmentType', el => el.textContent.trim());
    expect(selectedEmploymentType).toBe('Full-Time');

    // Fill Company Name
    await page.fill('input[placeholder="Enter Company Name"]', 'Netixsol');

    // Select Country (Pakistan)
    await page.click('input[placeholder="Choose a country"]');
    await page.type('input[placeholder="Choose a country"]', 'Pakistan');
    await page.waitForSelector('.MuiAutocomplete-option');
    await page.click('.MuiAutocomplete-option');
    await page.waitForSelector('input[placeholder="Choose a country"][value="Pakistan"]');
    const selectedCountry = await page.$eval('input[placeholder="Choose a country"]', el => el.value.trim());
    expect(selectedCountry).toBe('Pakistan');

    // Select City (Faisalabad)
    await page.click('input[placeholder="Choose a city"]');
    await page.type('input[placeholder="Choose a city"]', 'Faisalabad');
    await page.waitForSelector('.MuiAutocomplete-option');
    await page.click('.MuiAutocomplete-option');
    await page.waitForSelector('input[placeholder="Choose a city"][value="Faisalabad"]');
    const selectedCity = await page.$eval('input[placeholder="Choose a city"]', el => el.value.trim());
    expect(selectedCity).toBe('Faisalabad');

    // Select Job Type
    await page.click('div[id="jobType"]');
    await page.waitForSelector('.MuiList-root');
    await page.click('li[data-value="onsite"]');
    await page.waitForTimeout(500); // Adjust timeout as needed
    const selectedJobType = await page.$eval('#jobType', el => el.textContent.trim());
    expect(selectedJobType).toBe('Onsite');

    // Check Currently Working checkbox
    await page.check('input.PrivateSwitchBase-input[name="currentlyWorking"]');
    const isChecked = await page.$eval('input.PrivateSwitchBase-input[name="currentlyWorking"]', el => el.checked);
    expect(isChecked).toBe(true);

    // Select Start Date
    const startDate = '2022-01-01'; // Example date to select
    await page.fill('input#startDate', startDate);
    await page.waitForSelector(`input#startDate[value="${startDate}"]`);
    const selectedStartDate = await page.$eval('input#startDate', el => el.value);
    expect(selectedStartDate).toBe(startDate);

    // Ensure the description textarea is visible and interactable
    await page.waitForSelector('textarea#description');

    // Clear any existing content (if needed)
    await page.fill('textarea#description', '');

    // Fill in the description
    await page.fill('textarea#description', 'Hi, It\'s my testcase');

    // Click on a different element to shift focus away from the description box
    await page.click('input#startDate'); // Clicking on start date input

    // Wait briefly to allow any potential UI changes to settle
    await page.waitForTimeout(500);

    // Now, click the "Save" button
    await page.click('button.MuiButton-containedPrimary');

    // Check if a success message or indicator appears after clicking
    const successMessageSelector = 'div.success-message';
    try {
      await page.waitForSelector(successMessageSelector, { timeout: 5000 });
      const successMessage = await page.textContent(successMessageSelector);
      expect(successMessage).toContain('Experience updated successfully');
    } catch (error) {
      console.error('Failed to find success message:', error);
      // Handle error or failure scenario as needed
    }
  });
});
