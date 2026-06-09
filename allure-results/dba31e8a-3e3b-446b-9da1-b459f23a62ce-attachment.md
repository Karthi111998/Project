# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Checkboxes.spec.js >> checks
- Location: tests\Checkboxes.spec.js:3:5

# Error details

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | 
  3  | test('checks',async ({page}) => {
  4  | 
  5  |     await page.goto('https://testautomationpractice.blogspot.com/')
  6  | 
  7  |     await page.locator("//input[@id='sunday' and @type='checkbox']").check()
  8  |     expect (await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()).toBeTruthy()
  9  | 
> 10 |     await page.waitForTimeout(5000)
     |                ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  11 | 
  12 |     const checkboxlocators=["//input[@id='friday' and @type='checkbox']",
  13 |                     "//input[@id='saturday' and @type='checkbox']",
  14 |                     "//input[@id='monday' and @type='checkbox']"]
  15 |      for (const locators of checkboxlocators){  /// multiple checkbox checked
  16 |         await page.locator(locators).check()
  17 |      }               
  18 |     await page.waitForTimeout(5000)
  19 | 
  20 |    for (const locators of checkboxlocators){  /// multiple checkbox unchecked
  21 |         
  22 |     
  23 |     if(await page.locator(locators).isChecked()){
  24 |   await page.locator(locators).uncheck()
  25 |   await page.waitForTimeout(5000)
  26 | 
  27 |     }
  28 |    
  29 |  
  30 |    }
  31 | })
```