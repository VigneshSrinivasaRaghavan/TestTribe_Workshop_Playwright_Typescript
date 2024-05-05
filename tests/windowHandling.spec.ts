import { test, expect } from '@playwright/test';

test('Single Tab Handling', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  const [newTab] = await Promise.all([
    page.waitForEvent('popup'),
    await page.click('button:has-text("click")')
  ]);

  await newTab.waitForLoadState();
  await newTab.locator('.selenium-button.selenium-webdriver.text-uppercase.fw-bold').click();
  await newTab.waitForTimeout(3000);
  await newTab.close();
})

test('Single Window Handling', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  await page.locator('a[href="#Seperate"]').click();
  const [newWindow] = await Promise.all([
    page.waitForEvent('popup'),
    await page.click('[onclick="newwindow()"]')
  ]);

  await newWindow.waitForLoadState();
  await newWindow.locator('.selenium-button.selenium-webdriver.text-uppercase.fw-bold').click();
  await newWindow.waitForTimeout(3000);
  await newWindow.close();
})

test('Multiple Tab Handling', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  await page.click('a:has-text("Open Seperate Multiple Windows")');
  const [multipleTab] = await Promise.all([
    page.waitForEvent('popup'),
    await page.click('[onclick="multiwindow()"]')
  ]);

  await multipleTab.waitForLoadState();
  const pages = multipleTab.context().pages();

  pages.forEach(tab =>{
    console.log(tab.url());
  })

  await pages[1].locator('#email').fill('vignesh@gmail.com');
  await pages[2].locator('.selenium-button.selenium-webdriver.text-uppercase.fw-bold').click();
  await pages[1].close();
  await pages[2].close();
})

/*
test('Multiple Window Handling', async ({ page }) => {
  Handling of Multiple window is exactly same as handling multiple tab
  For practice go to this website -> https://www.hyrtutorials.com/p/window-handles-practice.html
})
*/