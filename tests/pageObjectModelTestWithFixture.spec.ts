import { test, expect } from '../fixtures/pomFixture';

test('Orange HRM Login test with valid Credentials', async ({ page, dashboardPage, loginPage }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await loginPage.enterUsername("Admin");
  await loginPage.enterPassword("admin123");
  await loginPage.clickLoginButton();
  await dashboardPage.clickAdminTab();
  // await ap.enterEmployeeName("Admin");
  await dashboardPage.clickProfileAccordion();
  await dashboardPage.clickLogoutButton();
});