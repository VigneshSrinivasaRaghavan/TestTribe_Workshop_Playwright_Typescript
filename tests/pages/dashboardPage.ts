import {Page, Locator} from '@playwright/test'
import BasePage from './basePage'


export class DashboardPage extends BasePage{
    // Locators
    readonly page: Page;
    private readonly adminTab: Locator;
    private readonly profileAccordion: Locator;
    private readonly logoutButton: Locator;

    constructor(page: Page){
        super(page);
        this.adminTab = page.locator('//li[1]//a[1]//span[1]');
        this.profileAccordion = page.locator('.oxd-userdropdown-tab');
        this.logoutButton = page.locator('//a[normalize-space()="Logout"]');
    }

    // Method to operate the Locators

    async clickAdminTab(){
        await this.clickElement(this.adminTab);
    }

    async clickProfileAccordion(){
        await this.clickElement(this.profileAccordion);
    }

    async clickLogoutButton(){
        await this.clickElement(this.logoutButton);
    }
}