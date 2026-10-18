import { expect, Page, Locator } from '@playwright/test';

export class PerformancePage {

    readonly page: Page;
    readonly performanceHeader: Locator;

    constructor(page: Page) {
        this.page = page;

        this.performanceHeader = page.getByRole('heading', {
            name: 'Performance'
        });
    }
    async navigate_to_performce(){
        await this.page.goto("/web/index.php/performance/searchEvaluatePerformanceReview")

    }

    async validateHeaderText() {
        await expect(this.performanceHeader).toHaveText('Performance');
    }
}