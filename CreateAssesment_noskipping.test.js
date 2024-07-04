import { test, expect } from '@playwright/test';

test.describe('Test Create Job Post', () => {
  test('Verify Job post can be created', async ({ page }) => {
    // Navigate to the website and login
    await page.goto('https://staging.skillmatch.tech/signin');
    await page.fill('input[name="email"]', 'ehtashamalitoor50@gmail.com');
    await page.fill('input[name="password"]', 'Netixsol@fsd1');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();

    // Verify if redirected to the dashboard
    

    // Navigate to the profile page
    await page.goto('https://staging.skillmatch.tech/dashboard/company');

   
    await page.click('p.my-0.whitespace-pre.duration-200:has-text("Job Listing")');
    
    await page.click('button:has-text("Create Job Post")');




    await page.fill('input#title.MuiInputBase-input.MuiOutlinedInput-input.css-1pog434', 'sqa engineer');
    await page.click('span:has-text("Full-Time")');
    await page.fill('input#minSalaryRange', '150000');
    await page.fill('input#maxSalaryRange', '300000');
    await page.fill('input#applicationDeadline', '2025-01-05');
    
    await page.click('div#categories.MuiSelect-select');
    await page.click('li[data-value="661ebc8bfc8151980e966066"]');
 



// Using innerText to match exact text
await page.evaluate(() => {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
      if (button.innerText.includes('Add Skills')) {
          button.click();
      }
  });
});
// Click on the input field
await page.click('input#tags-outlined');

// Type 'Python' into the input field
await page.type('input#tags-outlined', 'Python');

// Press the arrow down key to navigate the dropdown
await page.keyboard.press('ArrowDown');

// Press enter to select 'Python'
await page.keyboard.press('Enter');

// Click on the close icon (SVG)
await page.click('button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-12h0q9n');

await page.click('input#country.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-16sx77j');

await page.fill('input#country.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-16sx77j', 'Pakistan');
await page.click('li:has-text("Pakistan")');

await page.fill('input#city.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-16sx77j', 'Faisalabad');
await page.click('li:has-text("Faisalabad")');



  // Click the input field and type "SQA Engineer"
  await page.click('input[placeholder="Search Assessment"]');
  await page.fill('input[placeholder="Search Assessment"]', 'SQA tesstt');

  // Click the "Create" button
  await page.click('button:has-text("Create")');

  // Wait for the new input field and type "SQA Engineer test"
  await page.fill('input[name="name"]', 'SQA  testt');

  // Click the button with the SVG icon
  await page.click('button:has-text("Next")');
  await page.click('button:has-text("SETTING")');

await page.click('svg.MuiSvgIcon-root');
await page.waitForSelector('input.PrivateSwitchBase-input', { timeout: 5000 });

// Click on the checkbox using Playwright
await page.click('input.PrivateSwitchBase-input');

await page.click('button:has-text("Finish")');

  
  // Click the final "Create" button
  await page.click('button:has-text("Create")');

  expect(dialog.message()).toBe('Assessment Created');
  await dialog.accept();

  
});

});
