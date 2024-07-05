import { test, expect } from '@playwright/test';

test.describe('AI job Application', () => {
    test('Verify AI job Application from candidate', async ({ page }) => {
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

        const elementText = 'AI Developer';
        await page.waitForSelector(`th.MuiTableCell-root:has-text("${elementText}")`);
    
        // Click on the <th> element
        await page.click(`th.MuiTableCell-root:has-text("${elementText}")`);        

        const linkText = 'See Application';
        await page.waitForSelector(`td.MuiTableCell-root:has-text("${linkText}")`);
    
        // Click on the link within the <td> element
        await page.click(`td.MuiTableCell-root:has-text("${linkText}") a`);

    await page.waitForTimeout(1500);
    await page.click('button.MuiButton-contained');

        expect(Url).toBe('https://staging.skillmatch.tech/company/candidates/661f018f488f67efc9133396');


    });
});  

        
