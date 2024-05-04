import { test, expect } from '@playwright/test'

test('Checkbox button Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await expect(page.locator('#checkbox1')).not.toBeChecked();
    await expect(page.locator('#checkbox2')).not.toBeChecked();
    await expect(page.locator('#checkbox3')).not.toBeChecked();

    await page.locator('#checkbox1').check();
    await page.locator('#checkbox2').check();

    expect(await page.locator('#checkbox1').isChecked()).toBeTruthy();
    expect(await page.locator('#checkbox2').isChecked()).toBeTruthy();
    expect(await page.locator('#checkbox3').isChecked()).toBeFalsy();
    
    await page.close();
});
