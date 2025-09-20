const { test, expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = page.locator('#email');
    this.passwordField = page.locator('#password');
    this.loginButton = page.locator("input[value='Login']");
    this.validateText=this.page.locator('.mb-3.fw-normal.border-bottom.text-left.pb-2.mb-4');
  }

  async gotoLoginPage() {
    await this.page.goto('/selenium/practice/login.php'); // baseURL + /login
  }

  async login(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  
  }

  async ValidateText()
    {
      let text="Login In";
       await expect(this.validateText).toBeVisible();
       await expect(this.validateText).toContainText(text);
  
    }
}

module.exports = LoginPage;
