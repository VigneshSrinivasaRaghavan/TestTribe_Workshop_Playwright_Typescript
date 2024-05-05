import { test, expect } from '@playwright/test';

test('Frame Handling Using Page.Frame()', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');

  // To find total number of Frames
  const allFrames = page.frames();
  console.log("Total Frame Count : ",allFrames.length)

  const frame1 = page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});
  await frame1?.locator('input[name="mytext1"]').fill('Vignesh');

  await page.waitForTimeout(5000);
  await page.close();
})

test('Frame Handling Using Page.FrameLocator()', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');
  const frame2 = page.frameLocator('frame[src="frame_2.html"]');
  frame2.locator('input[name="mytext2"]').fill('TestTribe');
  await page.waitForTimeout(5000);
  await page.close();
})

test('Nested Frame Handling', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');
  const frame3 = page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"});
  const childFrames = frame3?.childFrames();
  childFrames[0].locator('#i8').click({force:true});
  await page.waitForTimeout(5000);
  await page.close();
})