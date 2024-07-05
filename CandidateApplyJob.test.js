import { test } from '@playwright/test';

test.describe('Candidate Apply for Job', () => {
  test('Verify apply for job works correctly', async ({ page }) => {

    await page.goto('https://www.skillmatch.tech/company/view/65180a56c3f19457f7e49a09');
    await page.goto('https://www.skillmatch.tech/jobs/view/66795188d1643036e0baaf95');

 
    await page.click('button[type="button"].MuiButton-containedPrimary');


    await page.fill('input#name.MuiInputBase-input.MuiOutlinedInput-input.css-1pog434', 'Ramsha');
    await page.fill('input#email.MuiInputBase-input.MuiOutlinedInput-input.css-1pog434', 'f200143@cfd.nu.edu.pk');
    await page.fill('input#phone.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputAdornedStart.css-xhud73', '+92 332-6680562');
    await page.fill('input#previousJobTitle.MuiInputBase-input.MuiOutlinedInput-input.css-1pog434', 'SQA Engineer');
    await page.fill('input#linkedIn.MuiInputBase-input.MuiOutlinedInput-input.css-1pog434', 'linkedin.com/in/ramsha-rana-378669218');
    await page.fill('input#portfolioSite.MuiInputBase-input.MuiOutlinedInput-input.css-1pog434', 'https://portfolio.com');
    await page.fill('textarea#addInfo.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputMultiline.css-1vtaw6t', 'Hey, it\'s my testcase.');

  
    const fileInput = await page.$('input#\\:r9\\:[type="file"]');
    await fileInput.setInputFiles('C:/Users/DELL/Downloads/Ramsha_Resume.pdf');

   
    await page.waitForTimeout(1000); 
    
    await page.click('button:has-text("Submit Application")');


  });
});
