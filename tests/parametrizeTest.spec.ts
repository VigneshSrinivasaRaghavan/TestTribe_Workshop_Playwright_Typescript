import {test,expect} from '@playwright/test'

const credentials = [
    {
        "username":"standard_user",
        "password":"secret_sauce"
    },
    {
        "username":"locked_out_user",
        "password":"secret_sauce"
    },
    {
        "username":"problem_user",
        "password":"secret_sauce"
    }
]

credentials.forEach(data =>{
    test(`Parametrizing Test with ${data.username}`, async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('id=user-name').fill(data.username);
        await page.locator('[placeholder="Password"]').fill(data.password);
        await page.locator('[data-test="login-button"]').click();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await expect(page).toHaveTitle('Swag Labs');
    });
})

