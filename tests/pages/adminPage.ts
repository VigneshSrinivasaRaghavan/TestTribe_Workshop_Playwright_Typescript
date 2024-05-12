import {Page, Locator} from '@playwright/test'
import BasePage from './basePage'

export class AdminPage extends BasePage{
    // Locators
    readonly page: Page;
    private readonly employeeNameTextbox: Locator;
    private readonly searchButton: Locator;

    constructor(page: Page){
        super(page);
        this.employeeNameTextbox = page.locator('input[placeholder="Type for hints..."]"]');
        this.searchButton = page.locator('button[type="submit"]');
    }

    // Method to operate the Locators

    async enterEmployeeName(employeeNameText:string){
        await this.fillField(this.employeeNameTextbox,employeeNameText);
    }

    async clickSearchButton(){
        await this.clickElement(this.searchButton);
    }
}
