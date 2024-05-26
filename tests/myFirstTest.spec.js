const {test, expect} = require('@playwright/test')

test('myfirst test', async({page})=>{
    
    await page.goto('https://saucedemo.com')

    await page.locator('[data-test="username"]').fill('wajih');
    //await page.locator('[data-test="username"]').fill('wajih');

    await page.pause()
})



test.only('test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.pause();
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();

    await expect(page.locator('//*[@id="logout_sidebar_link"]')).toHaveText('Logout');

    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
  });