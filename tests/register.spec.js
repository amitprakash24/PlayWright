const { test, expect } = require('@playwright/test');
const RegisterPage=require('../pages/RegisterPage');
const testData = require('../utils/register.json');


test.only('Register with new user ', async ({ page }) => {
const registerPage = new RegisterPage(page);
  await registerPage.gotoRegisterPage();
  // let text1='welcome';
  await registerPage.ValidateText();

  await registerPage.RegistrationForm(testData.Registeruser.firstName,testData.Registeruser.lastName ,testData.Registeruser.username, testData.Registeruser.password);
  
});
