import { Page, expect } from '@playwright/test';
import { dashboardLocator } from './pageLocators/dashboard';
import { directoryLocator } from './pageLocators/directory';

export async function goToDirectoryPage(page: Page) {
    await page.click(dashboardLocator.directory_menu);
}

export function getLocatorByReplaceValue(page: Page, inputlocator: string, value: string ) {    
    const element = page.locator(inputlocator.replace('<replace>', `${value}`))     
    return element;
}

export async function selectLocationOption(page: Page, location: any) {
  // Click on the dropdown to open it
  await page.click(directoryLocator.location_dropdown_icon);
  const element = await getLocatorByReplaceValue(page, directoryLocator.location_option, location)
  await element.click()
  await page.waitForTimeout(2000)
  await page.click(directoryLocator.search_button)
}



export async function verifyLocationIsShowUpInRecordFound(page: Page, location: any) {
  // Click on the dropdown to open it
    const element = await getLocatorByReplaceValue(page, directoryLocator.first_record_location , location)
    await expect(element).toBeVisible()    
}