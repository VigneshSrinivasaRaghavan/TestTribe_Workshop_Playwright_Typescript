import { test } from '@playwright/test';

test('Downalod a file', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/FileDownload.html#google_vignette');
  await page.locator('#textbox').click();
  await page.locator('#textbox').type('TestTribe Playwright Workshop');
  await page.locator('#createTxt').click();
  const download = await Promise.all([
    page.waitForEvent("download"),
    page.locator('#link-to-download').click()
  ]);
  const path = await download[0].path();
  console.log("Downloaded Path: "+path);

  // Way 1 - Using default file name
  const fileName = download[0].suggestedFilename();

  // Way 2 - Using customise file name
  const fileName2 = "PlaywrightTTTFile";

  await download[0].saveAs(fileName2);

  await page.close();
});