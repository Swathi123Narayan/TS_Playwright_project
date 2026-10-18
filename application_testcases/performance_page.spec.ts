
import {test} from '../fixtures/test.fixture'

test('Verify Performance header', async ({ performancePage }) => {
    await performancePage.validateHeaderText();
});