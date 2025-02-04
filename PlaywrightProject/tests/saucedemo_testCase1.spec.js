const { test, expect } = require('@playwright/test');

test('SauceDemo Testcase1 ', async ({ page }) => {

    // Step 1: Navigate to SauceDemo login page

    await page.goto('https://www.saucedemo.com/');

    // Step 2: Login with credentials

    await page.fill('#user-name', 'standard_user'); 

    await page.fill('#password', 'secret_sauce');

    await page.click('#login-button');

    // Step 3: Verify that 6 products are displayed

    const products = await page.locator('.inventory_item');

    await expect(products).toHaveCount(6);

    // Step 4: Add "Sauce Labs Onesie" to the cart

    const onesieAddToCartButton = page.locator('button[id="add-to-cart-sauce-labs-onesie"]');
    await onesieAddToCartButton.click();

    // Step 5: Navigate to the cart page
    await page.click('.shopping_cart_link');

    // Step 6: Verify "Sauce Labs Onesie" is in the cart
    const cartItem = page.locator('.cart_item .inventory_item_name');
    await expect(cartItem).toHaveText('Sauce Labs Onesie');
});
