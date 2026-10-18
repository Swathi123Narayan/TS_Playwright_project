import {Page, test, expect,Locator} from '@playwright/test'

export class LoginPage{

    readonly page: Page;
    readonly username:Locator;
    readonly password:Locator;
    readonly loginbtn:Locator;

    constructor(page: Page) {
    this.page = page;
    this.username = page.getByRole('textbox', {name:"Username"});
    this.password = page.getByRole('textbox', {name:"Password"});
    this.loginbtn = page.getByRole('button',{name:"Login"})
    }

    async perform_login(username:string, password:string){
        await this.username.fill(username)
        await this.password.fill(password)
        await expect(this.loginbtn).toBeVisible()
        await this.loginbtn.click()
        await this.page.waitForURL(/dashboard/);
    }
}