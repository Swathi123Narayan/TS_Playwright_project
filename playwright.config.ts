import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

    testDir: './application_testcases',

    use: {
        // channel: 'chrome',
        headless: false,
        screenshot: 'on',
        trace: 'on',
        baseURL: 'https://opensource-demo.orangehrmlive.com',
    },

    projects: [

        {
            name: 'setup',
            testMatch: /auth\.setup\.ts/,
        },

        {
            name: 'chromium',
            dependencies: ['setup'],

            use: {
                ...devices['Desktop Chrome'],
                storageState: 'storageState.json',
            },
        },
    ],
    reporter: [
        ['list'],
        ['html', { outputFolder: 'playwright-report', open: 'never' }],
        ['junit', { outputFile: 'test-results/results.xml' }]
    ],
});
