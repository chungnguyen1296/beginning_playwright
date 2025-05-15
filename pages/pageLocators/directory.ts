export const directoryLocator = {
    directory_menu: "//div[@class='oxd-sidepanel-header']/following-sibling::div//span[text()='Directory']",
    location_dropdown_icon: "//div[label[normalize-space(text())='Location']]/following-sibling::div",
    location_option: "//div[@role='listbox']//span[contains(text(), '<replace>')]",
    search_button: "//button[@type='submit']",
    first_record_location: "(//div[contains(@class,'oxd-sheet oxd-sheet--rounded')])[1]//i[contains(@class,'oxd-icon bi-geo-alt-fill')]//following-sibling::div//p[text()='<replace>']",
  };