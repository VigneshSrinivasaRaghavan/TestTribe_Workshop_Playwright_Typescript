import { test, expect } from '@playwright/test';
import * as saucedemoData from './testData/sauceDemoCredentials.json'

test('Login test with valid Credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('id=user-name').fill(saucedemoData.validUsername);
  await page.locator('[placeholder="Password"]').fill(saucedemoData.validPassword);
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page).toHaveTitle('Swag Labs');

});

test('Login test with invalid Credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('id=user-name').fill(saucedemoData.invalidUsername);
  await page.locator('[placeholder="Password"]').fill(saucedemoData.invalidPassword);
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com');
  await expect(page).toHaveTitle('Swag Labs');
});