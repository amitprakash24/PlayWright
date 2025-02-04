const { test, expect } = require('@playwright/test');

test('Filter Disabled Admin Users in OrangeHRM', async ({ page }) => {
    // Navigate to OrangeHRM login page
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    // Login with provided credentials
    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'admin123');
    await page.click('button[type="submit"]');

    // Wait for dashboard to load
    await expect(page.locator('h6')).toHaveText('Dashboard');

    // Click on 'Admin' from the left menu
    await page.click('//span[text()="Admin"]');

    // Select 'Admin' under User Role
    await page.click('div.oxd-select-text:has-text("Select")'); // Open dropdown
    await page.locator('div.oxd-select-dropdown').locator('span', { hasText: 'Admin' }).click();

    await page.waitForTimeout(2000);
    // Select 'Disabled' under Status
       await page.locator(".oxd-select-text-input").nth(1).click();
       await page.locator(".oxd-select-dropdown").locator("text=Disabled").click();
   
    // Click 'Search' button
    await page.click('button:has-text("Search")');

    // Wait for search results to load
    await page.waitForTimeout(2000);

    // Verify that only 'Disabled' users are listed
    const statuses = await page.locator('div.oxd-table-cell:has-text("Disabled")').count();
     let totalRows = await page.locator('div.oxd-table-row').count();
     totalRows=totalRows-1;
     console.log('Total No of Disabled users:', statuses, 'we found:', totalRows);

      expect(statuses).toBe(totalRows); // Ensure all displayed users are disabled

       // Take a screenshot for reference
    await page.screenshot({ path: 'search_results.png', fullPage: true });
});
