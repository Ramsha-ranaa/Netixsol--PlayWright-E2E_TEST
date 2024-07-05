import { test, expect } from '@playwright/test';

test.describe('AI job Application', () => {
    test('Verify AI job Application from candidate', async ({ page }) => {
      
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
        expect(Url).toBe('https://staging.skillmatch.tech/company/jobs/job/view/667af65e08e05ebcf204f184');

    

    });
});  

        
