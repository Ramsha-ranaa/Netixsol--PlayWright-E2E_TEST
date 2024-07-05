import { test, expect } from '@playwright/test';

test.describe('Test Create Job Post', () => {
  test('Verify Job post can be created', async ({ page }) => {
   
    await page.goto('https://staging.skillmatch.tech/signin');
    await page.fill('input[name="email"]', 'ehtashamalitoor50@gmail.com');
    await page.fill('input[name="password"]', 'Netixsol@fsd1');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();

 
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
 



await page.evaluate(() => {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
      if (button.innerText.includes('Add Skills')) {
          button.click();
      }
  });
});

await page.click('input#tags-outlined');

await page.type('input#tags-outlined', 'Python');


await page.keyboard.press('ArrowDown');


await page.keyboard.press('Enter');


await page.click('button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-12h0q9n');

await page.click('input#country.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-16sx77j');

await page.fill('input#country.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-16sx77j', 'Pakistan');
await page.click('li:has-text("Pakistan")');

await page.fill('input#city.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-16sx77j', 'Faisalabad');
await page.click('li:has-text("Faisalabad")');




  await page.click('input[placeholder="Search Assessment"]');
  await page.fill('input[placeholder="Search Assessment"]', 'SQA tesstt');


  await page.click('button:has-text("Create")');

  await page.fill('input[name="name"]', 'SQA  testt');

  await page.click('button:has-text("Next")');
  await page.click('button:has-text("SETTING")');

await page.click('svg.MuiSvgIcon-root');
await page.waitForSelector('input.PrivateSwitchBase-input', { timeout: 5000 });


await page.click('input.PrivateSwitchBase-input');

await page.click('button:has-text("Finish")');

  
  await page.click('button:has-text("Create")');

  expect(dialog.message()).toBe('Assessment Created');
  await dialog.accept();

  
});

});
