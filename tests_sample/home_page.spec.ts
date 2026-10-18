import { test, expect } from '@playwright/test';


test('validate the dashboard page', async({page})=>{

    await page.goto('dashboard/index')
    await expect(page.locator('span[data-v-c286b6e5] h6[data-v-7b563373]')).toBeVisible()
})