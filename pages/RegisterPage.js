const { expect } = require('@playwright/test');

class Registerpage {
  constructor(page) {
    this.page = page;
    this.fName=page.locator('#firstname');
    this.lName=page.locator('#lastname');
    this.usernameField = page.locator('#username');
    this.passwordField = page.locator('#password');
    this.RegistrButton = page.locator("input[value='Register']");
    this.validateText = page.locator(".mb-3.fw-normal.border-bottom.text-left.pb-2.mb-4");
  }

  async gotoRegisterPage() {
    await this.page.goto('/selenium/practice/register.php'); 

  }

  async RegistrationForm(fName,lName,username, password) {

  
    await this.fName.fill(fName);
    await this.lName.fill(lName);
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);    
    await this.RegistrButton.click();
    
  }
  async ValidateText()
  {
    let text="Welcome";
     await expect(this.validateText).toBeVisible();
     await expect(this.validateText).toContainText(text);

  }
}

module.exports = Registerpage;
