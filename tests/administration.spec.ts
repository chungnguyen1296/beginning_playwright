import { test } from "@playwright/test";
import * as login from '../pages/pageActions/login';
import * as testData from '../configs/testData';
import urls from '../configs/evn.data';

const { step } = test;

test('Login with valid username and password - @TC01', async ({ page }) => {

    await step('1. Navigate to main url ', async () => {
        await page.goto(urls.loginUrl);
    });

    await step('2. Login with valid username and password ', async () => {
        await login.doLoginCustomer(page, testData.userLogin.admin.account, testData.userLogin.password);

    });

    await step('3. Confirm user is already in dashboard ', async () => {
        await login.verifyUserAlreadyInDashboard(page)
    });

});
