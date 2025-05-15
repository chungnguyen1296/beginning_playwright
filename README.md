# Playwright Demo Project

This repository contains a set of demo scripts using Playwright, showcasing how to interact with web elements using automation. Playwright is a Node.js library for browser automation, supporting modern browsers like Chromium, Firefox, and WebKit.

## Framework Structure

### 1. **`/tests` Directory**:
   This directory contains all the test scripts that demonstrate Playwright's capabilities for browser automation. Each file in this directory is a separate test scenario.

   - **Test Structure**: 
     - Each test script typically contains a sequence of actions: opening a page, interacting with elements, and asserting the expected behavior.
     - Playwright's `page` object is used to interact with the browser, and the `expect` API is used to assert conditions (such as checking if an element is visible, or if a particular text is present on the page).

### pages
- Define the actions on each separate page (pageActions)
- Should explain **WHAT** function does, not how does its task
- You must reuse the existing functions without modifying or deleting them (if you want to make changes, ensure that it doesn't affect the functionality of functions and test cases for others). If you cannot reuse the existing functions, you can create a new function
- Define the locator on each page separate (pageLocators)
- Define the common function (can use for all pages)

---

## Rationale for Framework Structure

The overall structure is designed to be simple and modular. The demo scripts are divided into small, testable units to showcase various Playwright features:

- **Separation of concerns**: Test scripts are kept separate from utility functions to maintain clarity and readability. Reusable functions are placed in the `/utils` directory to avoid code duplication.
- **Configurability**: The configuration file allows flexibility in browser and environment configuration. You can easily run tests across multiple browsers and environments without changing test scripts.
- **Scalability**: The structure is scalable, meaning you can expand the `/tests` folder with more test scripts as your project grows. New tests can be added without affecting existing ones.
- **Debugging Support**: Screenshots and video recordings are integrated into the framework to help with debugging and identifying issues quickly.

---

## Steps to Execute the Demo Scripts

### Prerequisites:
Before running the demo scripts, ensure you have the following installed:
- **Node.js**: Make sure you have Node.js (v14 or higher) installed on your machine.
- **Playwright**: This demo relies on Playwright for browser automation.

### 1. **How to run test**:
   First, clone this repository to your local machine:
   git clone https://github.com/chungnguyen1296/beginning_playwright.git
    To run the code please, install playwright into the project folder , open terminal and run " npx playwright test" to run the whole test or npx playwright test -g "Testcaseid" to run a  single test
For example : to run the TC03 in headed mode :   npx playwright test -g "TC03" --headed 
    
