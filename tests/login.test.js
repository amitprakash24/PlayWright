const { test, expect } = require('@playwright/test');
const LoginPage=require('../pages/LoginPage');
const testData = require('../utils/testData.json');


test('Login test with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();
  await page.pause();
  await loginPage.ValidateText();
  await loginPage.login(testData.validUser.username, testData.validUser.password);

});
