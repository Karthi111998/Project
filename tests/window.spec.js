import test, { chromium } from '@playwright/test'
//browser-chrome,firefox,webkit------inbuild fixtures
//context- windows---------inbuild fixtures
//page-tabs------------inbuild fixtures
test('windows',async () => {                /// creating from scratch so we no to mention fixture
 const browser= await chromium.launch()    // launching browser
   const context= await browser.newContext() // launching windows
   const page= await context.newPage()          //tabs created

   const page1=await context.newPage()
   const page2= await context.newPage()

   await page1.goto('https://www.amazon.com/')
   await page2.goto('https://www.flipkart.com/')

//    await page.pause()

const context2= await browser.newContext()// new tab opened
const page3 = await context2.newPage()
await page3.goto('https://www.instagram.com/')// page opened

})

test.only('handling',async()=>{
    const browser= await chromium.launch()  
    const context= await browser.newContext() 
   const page= await context.newPage()          

 const page1=await context.newPage()
await page1.goto('https://www.flipkart.com/')
await page1.locator("(//div//input[@title='Search for Products, Brands and More'])[1]").fill('mobiles')
await page1.keyboard.press('Enter')

const [newtab] = await Promise.all([
    context.waitForEvent('page'),
    page1.locator('//div[contains(text(),"MOTOROLA g67")]').click()
    ])

await page.waitForLoadState()
console.log(await newtab.title())


await page1.bringToFront();

await page.waitForTimeout(5000)
})