import {test, expect} from '@playwright/test'

test('verify',async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
// await pages.locator('#country').selectOption('India')
await page.locator('#country').selectOption({value:'india'})
await page.waitForTimeout(5000)


//check the number of options
const option= await page.$$('#country option')
console.log("Number of options:",option.length)

// asserations
await expect(option.length).toBe(10)

})