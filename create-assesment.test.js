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
  await page.fill('input[placeholder="Search Assessment"]', 'SQA Engineer');

  // Click the "Create" button
  await page.click('button:has-text("Create")');

  // Wait for the new input field and type "SQA Engineer test"
  await page.fill('input[name="name"]', 'SQA Engineer test');

  // Click the button with the SVG icon
  await page.click('button:has-text("Next")');
  await page.click('button:has(svg:has(path[d="M8.166 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm0-14.077c3.618 0 6.563 2.958 6.563 6.577a6.57 6.57 0 0 1-6.563 6.563A6.57 6.57 0 0 1 1.604 7.5c0-3.618 2.944-6.577 6.562-6.577ZM4.885 7.969h2.812v2.812a.469.469 0 0 0 .938 0V7.97h2.812a.469.469 0 0 0 0-.938H8.635V4.22a.469.469 0 0 0-.938 0V7.03H4.885a.469.469 0 0 0 0 .938Z"]))');
  await page.click('button:has(svg[width="7"][height="12"][style*="rotate(180deg)"])');

  // Click the final "Create" button
  await page.click('button:has-text("Create")');

  expect(dialog.message()).toBe('Assessment Created');
  await dialog.accept();

  
});

});
