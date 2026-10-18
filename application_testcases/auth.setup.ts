import { test as setup, expect } from '@playwright/test';
import credentials from '../config/credentials.json';
import { LoginPage } from '../Applications_pages/login_page';

const authFile = 'storageState.json';

setup('authenticate', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await loginPage.perform_login(
        credentials.username,
        credentials.password
    );

    // Verify login was successful
    await expect(page).toHaveURL(/dashboard/);

    // Save authenticated session
    await page.context().storageState({
        path: authFile
    });

    console.log('OrangeHRM authentication successful.');
    console.log('Storage state saved.');
});