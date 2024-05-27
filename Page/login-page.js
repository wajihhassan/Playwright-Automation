const { expect , fill} = require('@playwright/test')

class LoginPage{

    constructor(page){
        this.page=page;
        this.userNameButton = page.locator('[data-test="username"]');
        this.passwordButton = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.assertLogoutButton = page.locator('//*[@id="logout_sidebar_link"]');
    }
    
    async fillName (userName) {
       await this.userNameButton.fill(userName);
    }

    async fillPassword (userPassword) {
        await this.passwordButton.fill(userPassword);
     }

    async doLogin(userName,userPassword) {

        await this.fillName(userName);
        await this.fillPassword(userPassword);
        await this.loginButton.click();
    }

    async assertLoginSuccess() {
        //await page.pause();
        await expect(this.assertLogoutButton).toHaveText('Logout');
    }
    async assertInvalidLogin() {
        await this.assertLogoutButton;
        await page.textContent('Epic sadface: Username and password do not match any user in this service')
    }

}

module.exports = LoginPage;