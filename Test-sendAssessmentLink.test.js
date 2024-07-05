
import { test, expect } from '@playwright/test';

test.describe('Send Assessment Link', () => {
    test('Send Assessment Link', async ({ page }) => {
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
        (await page.waitForSelector(`th.MuiTableCell-root:has-text("${elementText}")`)).click();
    
        const element = await page.$('div#basic-menu');

        await page.click('li.MuiMenuItem-root[contains(.,"Send assessment link")]');
        xpect(dialog.message()).toBe('Assessment Send');
        await dialog.accept();
    });
});  

        

