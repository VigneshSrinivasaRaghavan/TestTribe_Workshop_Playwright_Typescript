import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import {parse} from 'csv-parse/sync';

const saucedemoData = parse(fs.readFileSync(path.join(__dirname,'testData','sauceDemoCreds.csv')),{
  columns:true,
  skip_empty_lines:true
})

test('Login test with valid Credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('id=user-name').fill(saucedemoData[0].username);
  await page.locator('[placeholder="Password"]').fill(saucedemoData[0].password);
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page).toHaveTitle('Swag Labs');

});

test('Login test with invalid Credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('id=user-name').fill(saucedemoData[1].username);
  await page.locator('[placeholder="Password"]').fill(saucedemoData[1].password);
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com');
  await expect(page).toHaveTitle('Swag Labs');
});