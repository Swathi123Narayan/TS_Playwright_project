import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {

    await page.goto('auth/login');

    const username = page.locator('input[name="username"]');
    const password = page.getByPlaceholder('Password');

    await username.fill('Admin');
    await password.fill('admin123');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/dashboard/);

    // Save login session
    await page.context().storageState({ path: authFile });
});