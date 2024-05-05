import { test, expect, Page } from '@playwright/test';
import {DateTime} from 'luxon';

test('Using Fill Method', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
  let date = "1993-10-18";
  await page.locator('#birthday').fill(date);
});

test.only('Using Luxon', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
  
  // Select Past Date
  await page.locator('input[placeholder="Start date"]').click();
  await selectDate(page,20,"June 2020");
  await page.waitForTimeout(5000);
  await page.pause();
  await page.reload();

  // Select Future Date
  await page.locator('input[placeholder="Start date"]').click();
  await selectDate(page,20,"June 2026");
  await page.waitForTimeout(5000);
  await page.pause();
  await page.reload();

  // Select Current Month date
  await page.locator('input[placeholder="Start date"]').click();
  await selectDate(page,20,"May 2024");
  await page.waitForTimeout(5000);
  await page.pause();
  await page.reload();
});

async function selectDate(page:Page,date:Number,dateToSelect:string){
  const monthYear = page.locator('div[class="datepicker-days"] th[class="datepicker-switch"]');
  const prevButton = page.locator('div[class="datepicker-days"] th[class="prev"]');
  const nextButton = page.locator('div[class="datepicker-days"] th[class="next"]');

  const formattedMonthYear = DateTime.fromFormat(dateToSelect,"MMMM yyyy");

  while(await monthYear.textContent() != dateToSelect){
    if(formattedMonthYear < DateTime.fromJSDate(new Date())){
      await prevButton.click();
    }
    else{
      await nextButton.click();
    }
  }

  await page.locator(`//td[@class="day"][text()="${date}"]`).click();
}