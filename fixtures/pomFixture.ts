import {test as baseTest} from '@playwright/test'
import {AdminPage} from '../tests/pages/adminPage';
import {DashboardPage} from '../tests/pages/dashboardPage';
import {LoginPage} from '../tests/pages/loginPage';

type pages = {
    adminPage:AdminPage,
    dashboardPage:DashboardPage,
    loginPage:LoginPage
}

const testPages = baseTest.extend<pages>({
    adminPage: async({page}, use) =>{
        await use(new AdminPage(page));
    },
    dashboardPage: async({page}, use) =>{
        await use(new DashboardPage(page));
    },
    loginPage: async({page}, use) =>{
        await use(new LoginPage(page));
    }
})

export const test = testPages;
export const expect = testPages.expect;
