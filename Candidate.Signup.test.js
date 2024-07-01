const { test, expect } = require('@playwright/test');

test.describe('Candidate SignUp', () => {
  test('Verify signup is saved correctly', async ({ page }) => {
    // Navigate to the website and login
    await page.goto('https://www.skillmatch.tech/signin');

    // Click on the Sign up link
    await page.click('a[href="/signup-type"]');

    

    await page.click('img[src="/images/candidate.svg"][alt="logo"][width="100px"][height="106px"]');

    await page.click('button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.css-12xf99b');


    // Expect the URL to be the candidate signup page
    await expect(page).toHaveURL('https://www.skillmatch.tech/signup?type=candidate');

    // Fill out the email field
    await page.fill('input[name="email"]', 'ramsha@gmail.com');

    // Fill out the password field
    await page.fill('input[name="password"]', 'Tester@12');

        // Fill out the confirm password field
        await page.fill('input[name="confirmPassword"]', 'Tester@12');

  // Click on the radio button
await page.click('input.PrivateSwitchBase-input.css-1m9pwf3');

   await page.click('div > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-fullWidth.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-fullWidth.css-5u4pot');



    // Fill out the name input field
    await page.fill('input#name.MuiInputBase-input.MuiOutlinedInput-input.css-1pog434', 'Ramsha ');

   
    // Write into the input field
    await page.fill('input[name="phone"].MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputAdornedStart.css-xhud73', ' +92 332-6680562');



    await page.click('div#gender.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.css-1880b1u');
    await page.keyboard.type('F');
    await page.keyboard.press('Enter');


    // Click on the Register button
    await page.click('button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-fullWidth.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-fullWidth.css-5u4pot');




    
  });
});
