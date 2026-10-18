import { test as base } from '@playwright/test';
import { DashboardPage } from '../Applications_pages/dasboard_page';
import { PerformancePage } from '../Applications_pages/performance_page';


type Fixtures = {
    dashboardPage: DashboardPage;
    performancePage: PerformancePage;
};

export const test = base.extend<Fixtures>({

    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    },

    performancePage: async ({ page }, use) => {
        await use(new PerformancePage(page));
    },

});