import { test, expect } from '@playwright/test'

test('Single Static DropDown Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.selectOption('#Skills',{
        value:"Android"
    });
    // await expect(page.locator('#Skills')).toHaveText('Android');
    await page.waitForTimeout(5000);
    await page.selectOption('#Skills',{
        label:"APIs"
    });
    await page.selectOption('#Skills',{
       index:7
    });
    await page.waitForTimeout(5000);
    await page.close();
});

test('Multi Static DropDown Handling', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
    await page.selectOption('#multi-select',[
        {value:"Florida"},
        {label:"New Jersey"},
        {index:4}
    ])
    await page.waitForTimeout(3000);
    await page.close();
});

test('Searchable Dynamic DropDown', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('span[role="combobox"]').click();
    await page.locator('input[type="search"]').fill('India');
    await page.locator('#select2-country-results>li').click();
    await page.waitForTimeout(3000);
    await page.close();
});

test.only('Non Searchable Dynamic DropDown', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('span[role="combobox"]').click();
    await page.locator('#select2-country-results>').locator('li',{
        hasText:"India"
    }).click();
    await page.waitForTimeout(3000);
    await page.close();
});