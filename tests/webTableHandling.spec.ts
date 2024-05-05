import { test, expect } from '@playwright/test';

test('Handling Webtable', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('table[name="BookTable"]');

    // Total Rows and Columns
    const columns = table.locator('tr th');
    const columnsCount = await columns.count();
    console.log("Number of Columns: ", columnsCount);

    const rows = table.locator('tbody tr');
    const rowCount = await rows.count();
    console.log("Number of Rows: ",rowCount);
    
    expect(rowCount).toBe(7);
    expect(columnsCount).toBe(4);

    await page.close();
})

test('Selecting Single Checkbox in the Table', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');
    const columns = table.locator('thead tr th');
    const rows = table.locator('tbody tr');

    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText:"Product 3"
    });

    await matchedRow.locator('input[type="checkbox"]').check();
    await page.close();
})

test('Selecting Multiple Checkbox using function', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');
    const rows = table.locator('tbody tr');
    await selectProduct(page,rows,"Product 2");
    await selectProduct(page,rows,"Product 3");
    await selectProduct(page,rows,"Product 5");
    await page.close();
})

async function selectProduct(page,rows,productName){
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: productName
    });
    await matchedRow.locator('input[type="checkbox"]').check();
}