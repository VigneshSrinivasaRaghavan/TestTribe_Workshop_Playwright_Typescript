/*
Visible/Hidden
Present/Not Present
Enabled/Disabled
Element Attributes
Text Match/mistMatch
URL
Title
Screenshot
*/

import { test, expect } from '@playwright/test';

test('Element Visble/Hidden', async ({ page }) => {
    await page.goto('https://www.letskodeit.com/practice');
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();
    await page.locator('#show-textbox').click();
    await expect(page.locator('#displayed-text')).toBeVisible();
});

test('Element Present/NotPresent', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    await page.locator('button[onclick="addElement()"]').click();
    await expect(page.locator('//button[normalize-space()="Delete"]')).toHaveCount(1);

    await page.locator('button[onclick="addElement()"]').click();
    await page.locator('button[onclick="addElement()"]').click();
    await expect(page.locator('//button[normalize-space()="Delete"]')).toHaveCount(3);

    await page.locator('(//button[@class="added-manually"][text()="Delete"])[1]').click();
    await expect(page.locator('//button[normalize-space()="Delete"]')).toHaveCount(2);
});

test('Element Enabled/Disabled', async ({ page }) => {
    await page.goto('https://letcode.in/buttons');
    await expect(page.locator('#home')).toBeEnabled();
    await expect(page.locator('[title="Disabled button"]')).toBeDisabled();
});

test('Element Attribute Verification', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await expect(page.locator('[placeholder="Username"]')).toHaveAttribute('name','username');
    // await expect(page.locator('[placeholder="Username"]')).toHaveAttribute('class','/.*oxd-input/');
});

test('Element text match/mismatch', async ({ page }) => {
    await page.goto('https://letcode.in/buttons');
    await expect(page.locator('#color')).toHaveText('What is my color?');
    await expect(page.locator('#position')).not.toHaveText('Find my Location');
});

test('URL and Title Verification', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('id=user-name').fill('standard_user');
    await page.locator('[placeholder="Password"]').fill('secret_Sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page).toHaveTitle('Swag Labs');
});

test('Screenshot Assertion', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('id=user-name').fill('standard_user');
    await page.locator('[placeholder="Password"]').fill('secret_Sauce');
    await expect(page).toHaveScreenshot();
});