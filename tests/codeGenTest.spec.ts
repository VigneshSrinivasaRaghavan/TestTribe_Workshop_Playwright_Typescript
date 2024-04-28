import { test, expect } from '@playwright/test';

test('Code Gen Test', async ({ page, context }) => {
    // Start Tracing 
    //   await context.tracing.start({snapshots:true,screenshots:true});

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').click({
        modifiers: ['Shift']
    });
    await page.getByPlaceholder('UsernameViki').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    // End Tracing
    //   await context.tracing.stop({path: 'progaramTracing.zip'});
});