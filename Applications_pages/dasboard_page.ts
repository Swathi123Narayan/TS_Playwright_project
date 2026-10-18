import {expect, Page, Locator} from '@playwright/test'

export class DashboardPage{
    readonly page: Page;
    readonly dashboard_header_text:Locator;
    constructor(page:Page){
        this.page=page
        this.dashboard_header_text = page.getByRole('heading',{ name: 'Dashboard' })
    }
    async navigate_todashboard(){
        await this.page.goto("/web/index.php/dashboard/index")

    }
    async validate_header_text(){
        await expect(this.dashboard_header_text).toBeVisible();
        await expect(this.dashboard_header_text).toHaveText('Dashboard');    }
}