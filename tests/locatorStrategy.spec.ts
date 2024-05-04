/*
Id - #
name
datat-test-id
placeholder
class
css
xpath
*/

import { test, expect } from '@playwright/test';

test('Locator Strategy Test', async ({ page, context }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('id=user-name').fill('standard_user');
    await page.locator('[placeholder="Password"]').fill('secret_Sauce');
    await page.locator('[data-test="login-button"]').click();
});