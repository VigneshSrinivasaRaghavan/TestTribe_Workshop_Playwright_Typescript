import {Page, Locator} from '@playwright/test'
import BasePage from './basePage';

export class LoginPage extends BasePage{
    // Locators
    readonly page: Page;
    private readonly usernameTextbox: Locator;
    private readonly passwordTextbox: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page){
        super(page);
        this.usernameTextbox = page.locator('input[placeholder="Username"]');
        this.passwordTextbox = page.locator('input[placeholder="Password"]');
        this.loginButton = page.locator('button[type="submit"]');
    }

    // Method to operate the Locators

    async enterUsername(usernameText:string){
        await this.fillField(this.usernameTextbox,usernameText);
    }

    async enterPassword(passwordText:string){
        await this.fillField(this.passwordTextbox,passwordText);
    }

    async clickLoginButton(){
        await this.clickElement(this.loginButton);
    }
}
