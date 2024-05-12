import {test} from '@playwright/test'

test('Upload multiple Files - Approach 1', async({page})=>{
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
    const upload = await Promise.all([
        page.waitForEvent("filechooser"),
        page.locator('input[name="files[]"]').click()
    ]);
    // await upload[0].setFiles('filesToUpload/playwright_1.png');
    await upload[0].setFiles(['filesToUpload/playwright_1.png','filesToUpload/playwright_2.png']);
    await page.waitForTimeout(5000);
    await page.close();
})

test('Upload multiple Files - Approach 2', async({page})=>{
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
    // await page.setInputFiles('input[name="files[]"]','filesToUpload/playwright_1.png');
    await page.setInputFiles('input[name="files[]"]',['filesToUpload/playwright_1.png','filesToUpload/playwright_2.png']);
    await page.waitForTimeout(5000);
    await page.close();
})