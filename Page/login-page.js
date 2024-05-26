const { expect , fill} = require('@playwright/test')

class LoginPage{

    constructor(page){
        this.page=page;
        this.userNameButton = page.locator('[data-test="username"]');
        this.passwordButton = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.assertLogoutButton = page.locator('//*[@id="logout_sidebar_link"]');
    }
    
    async enterUserName(username) {
        //await this.userNameButton.waitFor({ state: 'visible' }); // Wait for the username input to be visible
        await this.userNameButton.fill(username);
    }
    
    async enterPassword(password){
        await this.passwordButton.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async assertLoginSuccess() {
        await this.assertLogoutButton;
        await expect(this.assertLogoutButton).toHaveText('Logout');
    }
}

module.exports = LoginPage;