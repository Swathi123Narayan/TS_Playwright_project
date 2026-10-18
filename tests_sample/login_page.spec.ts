import { test, expect } from '@playwright/test';

test("launch browser @sanity @regression", async ({ page }) => {
    await page.goto('auth/login');
    await expect(page).toHaveTitle('OrangeHRM');
});

test("Login to the application @smoke @regression", async({page})=>{
  await page.goto("auth/login");
  const username = await page.locator('//input[@name="username"]')
  const password = await page.getByPlaceholder("Password")
  await username.fill("Admin")
  await password.fill("admin123")
  await page.getByRole('button',{name:"Login"}).click()
  await expect(page).toHaveURL('dashboard/index')


})