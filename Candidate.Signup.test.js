const { test, expect } = require('@playwright/test');

test.describe('Candidate SignUp', () => {
  test('Verify signup is saved correctly', async ({ page }) => {
  
    await page.goto('https://www.skillmatch.tech/signin');

    await page.click('a[href="/signup-type"]');

    

    await page.click('img[src="/images/candidate.svg"][alt="logo"][width="100px"][height="106px"]');

    await page.click('button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.css-12xf99b');


    await expect(page).toHaveURL('https://www.skillmatch.tech/signup?type=candidate');

    await page.fill('input[name="email"]', 'ramsha@gmail.com');

    await page.fill('input[name="password"]', 'Tester@12');

        await page.fill('input[name="confirmPassword"]', 'Tester@12');

 
await page.click('input.PrivateSwitchBase-input.css-1m9pwf3');

   await page.click('div > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-fullWidth.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-fullWidth.css-5u4pot');



    await page.fill('input#name.MuiInputBase-input.MuiOutlinedInput-input.css-1pog434', 'Ramsha ');

   
    await page.fill('input[name="phone"].MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputAdornedStart.css-xhud73', ' +92 332-6680562');



    await page.click('div#gender.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.css-1880b1u');
    await page.keyboard.type('F');
    await page.keyboard.press('Enter');


    await page.click('button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-fullWidth.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-fullWidth.css-5u4pot');




    
  });
});
