import { test, expect } from '@playwright/test';
import {AdminPage} from '../tests/pages/adminPage';
import {DashboardPage} from '../tests/pages/dashboardPage';
import {LoginPage} from '../tests/pages/loginPage';

test('Orange HRM Login test with valid Credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  const lp = new LoginPage(page);
  const dp = new DashboardPage(page);
  const ap = new AdminPage(page);
  await lp.enterUsername("Admin");
  await lp.enterPassword("admin123");
  await lp.clickLoginButton();
  await dp.clickAdminTab();
  // await ap.enterEmployeeName("Admin");
  await dp.clickProfileAccordion();
  await dp.clickLogoutButton();
});