import {test} from '@playwright/test'

test('Fill Method',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.locator('[placeholder="Username"]').fill('Admin');
    await page.locator('[placeholder="Password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();
})

test('Press - Sequentially method',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.locator('[placeholder="Username"]').pressSequentially('Admin');
    await page.locator('[placeholder="Password"]').pressSequentially('admin123');
    await page.locator('[placeholder="Password"]').press('Enter');
})

test.only('Press - Sequentially method with Delay',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.locator('[placeholder="Username"]').pressSequentially('Admin',{delay:500});
    await page.locator('[placeholder="Password"]').pressSequentially('admin123',{delay:500});
    await page.locator('[placeholder="Password"]').press('Enter');
})