import { test, expect } from '@playwright/test';

test.describe('website', () => {
    test('Verify candidate website', async ({ page }) => {
    
        await page.goto('https://staging.skillmatch.tech/signin');
        await page.fill('input[name="email"]', 'ehtashamalitoor50@gmail.com');
        await page.fill('input[name="password"]', 'Netixsol@fsd1');
        await page.click('button[type="submit"]');
        await page.waitForNavigation();
    
        
        
    
        await page.goto('https://staging.skillmatch.tech/dashboard/company');
    
       
        await page.click('p.my-0.whitespace-pre.duration-200:has-text("Job Listing")');

        const elementText = 'AI Developer';
        await page.waitForSelector(`th.MuiTableCell-root:has-text("${elementText}")`);
    
       
        await page.click(`th.MuiTableCell-root:has-text("${elementText}")`);        

        const linkText = 'See Application';
        (await page.waitForSelector(`td.MuiTableCell-root:has-text("${linkText}")`)).click();
    
    

        await page.locator('a[href="https://ehtasham-portfolio.vercel.app"]').click();

        await expect(page).toHaveURL('https://ehtasham-portfolio.vercel.app/');

        
    });
});  

        
