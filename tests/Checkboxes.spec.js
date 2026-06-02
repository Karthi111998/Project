import {test,expect} from '@playwright/test'

test('checks',async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator("//input[@id='sunday' and @type='checkbox']").check()
    expect (await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()).toBeTruthy()

    await page.waitForTimeout(5000)

    const checkboxlocators=["//input[@id='friday' and @type='checkbox']",
                    "//input[@id='saturday' and @type='checkbox']",
                    "//input[@id='monday' and @type='checkbox']"]
     for (const locators of checkboxlocators){  /// multiple checkbox checked
        await page.locator(locators).check()
     }               
    await page.waitForTimeout(5000)

   for (const locators of checkboxlocators){  /// multiple checkbox unchecked
        
    
    if(await page.locator(locators).isChecked()){
  await page.locator(locators).uncheck()
  await page.waitForTimeout(5000)

    }
   
 
   }
})