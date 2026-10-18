import {test,chromium, expect} from '@playwright/test'

test("launch browser", async()=>{

    // launch browser
    const browser = await chromium.launch({headless:false})
    // browser context 
    const context1 = await browser.newContext()
    // launch page
    const page = await context1.newPage()
    await page.goto('https://www.saucedemo.com/')
    await expect(page).toHaveTitle('Swag Labs')
})