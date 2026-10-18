import { test } from '../fixtures/test.fixture'


// TC-001- verify the performance page header
test(' @smoke @regression Verify Dashboard header', async ({ dashboardPage }) => {
    await dashboardPage.navigate_todashboard()
    await dashboardPage.validate_header_text();
});

