import { test, expect } from '@playwright/test';

test.describe('Assessments', () => {
  test('Verify initial attempt in assessment', async ({ page }) => {
    // Navigate to the website and login
    await page.goto('https://staging.skillmatch.tech/invited-signin?identifier=cf461586885ac2006bdcd5873ac852d5c773e5ecd99d7da0bafde34445e831560d5ca0838aeadc0a4c5f454e7dc9953427d525e2b75b280fe1bf10f50a49d5c4b3fcdc92');
    await page.fill('input[name="password"]', 'Tester@12');

    await page.click('button[type="submit"]');
    
    // Wait for navigation to the dashboard
    await page.waitForNavigation();

    // Verify if redirected to the dashboard using page.url()
    expect(page.url()).toBe('https://staging.skillmatch.tech/candidate/assessment/6686493d5da6c3d89bc615db?job=668649c85da6c3d89bc615ee');

    // Navigate to the profile page
    await page.goto('https://staging.skillmatch.tech/candidate/assessment/6686493d5da6c3d89bc615db?job=668649c85da6c3d89bc615ee');
    await page.click('button:has-text("Next")');
    const element = page.locator('p.m-0.pt-4.font-["Inter"].text-base.font-semibold.leading-loose.tracking-tight.text-neutral-800');
    const textContent = await element.textContent();
    
    await expect(element).toContainText('1');
    
    
    if (textContent === '1') {
      console.log('Attempt is the 1st');
    } else {
      console.log('Attempt is not the 1st');
    }
  });
});
