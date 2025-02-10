import { Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class LoginPage extends BasePage {
    xPathUsername = "#username";
    xPathPassword = "#password";
    xPathBtnLogin = "#login";
    url = "#url";
    constructor(page: Page) {
        super(page);
    }

    async navigateToLoginPage(url: string) {
        await this.navigateTo(url);
    }

    async fillUsername (username: string) {
        await this.page.locator(this.xPathUsername).fill(username);
    }
    async fillPassword (password: string) {
        await this.page.locator(this.xPathUsername).fill(password);
    }

    async clickBtnLogin() {
        await this.page.locator(this.xPathBtnLogin).click();
    }

    async login(username: string, password: string) {
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickBtnLogin();
    }
}