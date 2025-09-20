/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './tests',
  retries: 1,
  reporter: [
    ['list'], // normal console output
    ['allure-playwright'] // Allure report output
  ],
  use: {
    headless: false, // false 
    screenshot: 'on',
    video: 'retain-on-failure',
    baseURL: 'https://www.tutorialspoint.com', 
  },
};

module.exports = config;
