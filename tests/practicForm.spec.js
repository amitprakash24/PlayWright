const { test, expect } = require('@playwright/test');
const PracticForm=require('../pages/PracticFormPage');
const testData = require('../utils/register.json');

test.only('practics form fillup', async ({ page }) => {
const practiceForm = new PracticForm(page);
practiceForm.gotoPracticFormPage();
practiceForm.enterInformationinForm("amit");

   
});
