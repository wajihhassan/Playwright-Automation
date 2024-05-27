const {test, expect} = require('@playwright/test')
const LoginPage = require ('../Page/login-page')

let loginPage;
const userName = 'standard_user';
const userPassword = 'secret_sauce';
const URL ='https://saucedemo.com';

test.beforeEach(async ({page}) => {
    await page.goto(URL);
    //await page.pause();
    loginPage = new LoginPage(page);
});

test.only('test', async ({ page }) => {

    //await loginPage.enterUserName('standard_user');
    //await loginPage.enterPassword('secret_sauce');
    await loginPage.validLogin(userName, userPassword);
    await loginPage.assertLoginSuccess();
    //await page.pause();
  });