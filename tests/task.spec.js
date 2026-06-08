import { test,expect, chromium } from '@playwright/test';

// //fixture-golbal variable we have multiple fixtures: page, browser 
// test('home', async ({ page }) => {
//   await page.goto('https://www.dummyticket.com/')
//   await page.waitForTimeout(2000);
// await page.goto('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
//   await page.goBack()
// await page.waitForTimeout(5000);
// await page.goForward()
//   });
test.only('sampletask',async()=> {
    const browser=await chromium.launch()
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto('https://www.flipkart.com/')
    await page.locator('(//div//input[contains(@title,"Search for Products, Brands and More")])[1]').fill('tshirts')
    await page.keyboard.press('Enter')
    await page.waitForSelector("//div[contains(@class,'p0C73x')]//a[@title]")
   const products= await page.locator("//div[contains(@class,'p0C73x')]//a[@title]")
   const count = await products.count();
   console.log(count)

const titles = []

for (let i = 0; i < count; i++) {
      const title = await products.nth(i).getAttribute('title')
    titles.push(title)// add title to titles it is array
 if(title && title.startsWith('Men')){
   console.log(title)
     }
}

})
