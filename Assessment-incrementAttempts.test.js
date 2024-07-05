import { test, expect } from '@playwright/test';

test.describe('Assessments', () => {
  test('Verify increment in attempts in assessment', async ({ page }) => {

    await page.goto('https://staging.skillmatch.tech/invited-signin?identifier=cf461586885ac2006bdcd5873ac852d5c773e5ecd99d7da0bafde34445e831560d5ca0838aeadc0a4c5f454e7dc9953427d525e2b75b280fe1bf10f50a49d5c4b3fcdc92');
    await page.waitForTimeout(1000);
    
    await page.fill('input[name="password"]', 'Tester@12');

    await page.click('button[type="submit"]');
   
    await page.waitForNavigation();

 
    expect(page.url()).toBe('https://staging.skillmatch.tech/candidate/assessment/6686493d5da6c3d89bc615db?job=668649c85da6c3d89bc615ee');

    await page.goto('https://staging.skillmatch.tech/candidate/assessment/6686493d5da6c3d89bc615db?job=668649c85da6c3d89bc615ee');
    await page.click('button:has-text("Next")');

    await page.click('button.card-shadow >> text=1');

    await page.click('button:has-text("Ready Set Go !")');

    await page.click('button:has-text("Start Test")');
    
    await page.click('button:has-text("Next")');

  });
});
