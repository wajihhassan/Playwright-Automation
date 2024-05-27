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

test.describe('Demo - login' , () => {
    

    test('Valid Credential login', async ({ page }) => {

        await loginPage.doLogin(userName, userPassword);
        await loginPage.assertInvalidLogin();
        
        });

        

    test('Invalid password login', async ({ page }) => {

        await loginPage.doLogin(userName, userName);
        await loginPage.assertInvalidLogin();
        
        });

        

    test.only('Valid username login', async ({ page }) => {

        await loginPage.doLogin(userName, userPassword);
        await loginPage.assertLoginSuccess();
        });
    
    //This is update comment
});