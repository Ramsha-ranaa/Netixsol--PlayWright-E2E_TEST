import { test, expect } from '@playwright/test';

test.describe('linkedin', () => {
    test('Verify  candidate linkedin', async ({ page }) => {
      
        await page.goto('https://staging.skillmatch.tech/signin');
        await page.fill('input[name="email"]', 'ehtashamalitoor50@gmail.com');
        await page.fill('input[name="password"]', 'Netixsol@fsd1');
        await page.click('button[type="submit"]');
        await page.waitForNavigation();
    
       
        await page.goto('https://staging.skillmatch.tech/dashboard/company');
    
       
        await page.click('p.my-0.whitespace-pre.duration-200:has-text("Job Listing")');

        const elementText = 'AI Developer';
        (await page.waitForSelector(`th.MuiTableCell-root:has-text("${elementText}")`)).click();
    
        await page.click(`th.MuiTableCell-root:has-text("${elementText}")`);        

        const linkText = 'See Application';
        (await page.waitForSelector(`td.MuiTableCell-root:has-text("${linkText}")`)).click();

        //await page.waitForSelector('a[href="https://www.linkedin.com/in/ehtasham-toor-3865b317b/"]');
        await page.locator('a[href="https://www.linkedin.com/in/ehtasham-toor-3865b317b/"]').click();
               
        await expect(link).toHaveCount(0);


    });
});  

        
