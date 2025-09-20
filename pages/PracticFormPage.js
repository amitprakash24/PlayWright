const { expect } = require("@playwright/test");

class PracticForm {
  constructor(page) {
    this.page = page;
    this.nameField = page.getByRole("textbox", { name: "Name:" });
    this.header = page.getByRole("heading", { name: "Student Registration Form" });

  }

  async gotoPracticFormPage() {
    await this.page.goto("selenium/practice/selenium_automation_practice.php");
    await expect(this.header).toBeVisible();
  }

  async enterInformationinForm(name) {
    await this.nameField.fill(name);
  }
}

module.exports = PracticForm;

/*


test('test', async ({ page }) => {
  
  await page.getByRole('textbox', { name: 'Name:' }).click();
  await page.getByRole('textbox', { name: 'Name:' }).fill('TestDemo');
  await page.getByRole('textbox', { name: 'Name:' }).press('Tab');
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('Test@gmail.com');
  await page.getByRole('radio', { name: 'Gender:' }).check();
  await page.getByRole('radio').nth(1).check();
  await page.getByRole('textbox', { name: 'Mobile(10 Digits):' }).click();
  await page.getByRole('textbox', { name: 'Mobile(10 Digits):' }).fill('123321312');
  await page.getByRole('textbox', { name: 'Date of Birth:' }).fill('2025-09-16');
  await page.getByRole('textbox', { name: 'Subjects:' }).click();
  await page.getByRole('textbox', { name: 'Subjects:' }).fill('Math');
  await page.getByRole('checkbox', { name: 'Hobbies:' }).check();
  await page.getByRole('checkbox').nth(1).check();
  await page.getByRole('button', { name: 'Picture: State and City' }).click();
  await page.getByRole('button', { name: 'Picture: State and City' }).setInputFiles('Screenshot (1).png');
  await page.getByRole('textbox', { name: 'Currend Address' }).click();
  await page.getByRole('textbox', { name: 'Currend Address' }).fill('Varanasi u.p');
  await page.locator('#state').selectOption('Uttar Pradesh');
  await page.locator('#city').selectOption('Lucknow');
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  await page.getByRole('button', { name: 'Login' }).click();

}
);*/