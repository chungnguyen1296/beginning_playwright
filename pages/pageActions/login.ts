import { expect, Page } from '@playwright/test';
import { loginLocator } from '../pageLocators/login';

export async function doLoginCustomer(page: Page, username:string, password:any) {
    
    await page.waitForSelector(loginLocator.input_username);
    await page.fill(loginLocator.input_username, username);

    await page.fill(loginLocator.input_password, password);

    await page.click(loginLocator.btn_login);

}

export async function verifyUserAlreadyInDashboard(page: Page) {
    await page.waitForLoadState()
    await expect((await page.locator(loginLocator.lbl_dashboard))).toBeVisible()    
}

export async function verifyUserAreInLoginPage(page: Page) {
    await page.waitForLoadState()
    await expect((await page.locator(loginLocator.lbl_login))).toBeVisible()    
}

export async function verifyInvalidLoginMessageIsVisible(page: Page) {
    await page.waitForLoadState()
    await expect((await page.locator(loginLocator.lbl_invalid_login_message))).toBeVisible()    
}