import { test } from "@playwright/test";
import * as login from '../pages/pageActions/login';
import * as testData from '../configs/testData';
import urls from '../configs/evn.data';
import * as common from "../pages/common";

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

test('Login with invalid credentials - @TC02', async ({ page }) => {

    const randompassword = 'pass' + Math.floor(new Date().getTime() / 1000.0);

    await step('1. Navigate to main url ', async () => {
        await page.goto(urls.loginUrl);
    });

    await step('2. Login with valid username and password ', async () => {
        await login.doLoginCustomer(page, testData.userLogin.admin.account, randompassword);
    });

    await step('3. Verify User still on login page with error message ', async () => {
        await login.verifyUserAreInLoginPage(page)
        await login.verifyInvalidLoginMessageIsVisible(page)
    });

});


test('Demo Test Case - @TC03', async ({ page }) => {

    await step('1. Login with admin account ', async () => {
        await page.goto(urls.loginUrl);
        await login.doLoginCustomer(page, testData.userLogin.admin.account, testData.userLogin.password);
        await login.verifyUserAlreadyInDashboard(page)

    });

    await step('2. Demo a search  by location in Directory menu ', async () => {
        await common.goToDirectoryPage(page)
        const location = "Texas R&D"
        await common.selectLocationOption(page, location)
        await common.verifyLocationIsShowUpInRecordFound(page, location)

    });


});