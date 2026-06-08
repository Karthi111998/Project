//locators 
//#	       id	    input#twotabsearchtextbox /
//.        class    span.desktop-iconSearch
//[ ]	attribute	[placeholder="Search"]

//browser-chrome,firefox,webkit------inbuild fixtures
//context- windows---------inbuild fixtures
//page-tabs------------inbuild fixtures

/*import { test, expect } from '@playwright/test';*/
/*test('search' ,async({page})=>{
    await page.goto('https://www.myntra.com/')
    await page.waitForTimeout(5000)
    await page.getByPlaceholder("Search for products").click()
    await page.getByPlaceholder("Search for products").fill('dress')
     await page.locator("span.desktop-iconSearch").click()
//await page.locator('input.desktop-searchBar').click();
//await page.locator('input.desktop-searchBar').fill('tshirt');
//await page.locator('//input[contains(@class,"desktop-searchBar")]').fill('tshirt');
await page.waitForTimeout(4000)
});*/


/*test('verfiy title',async({page})=>{
    await page.goto('https://www.amazon.com/')
    console.log("url:",await page.url) // to print the url
    await expect(page).toHaveURL(/amazon/)// to verify the url has amazon 
});*/


import{test, expect} from "@playwright/test"

/*test("check the locators", async({page})=>{
         await page.goto("https://demo.nopcommerce.com/");
         await page.waitForTimeout(4000)
      //   page.getByAltText("nopCommerce demo store")
      await expect(page.getByAltText("nopCommerce demo store")).toBeVisible();

await expect(page.getByText('Welcome to our store')).toBeVisible();
})*/

/*test('verify the url',async({page})=>{
    await page.goto("https://www.amazon.com/")
    await page.waitForTimeout(4000)
    await page.reload();
    await page.goto("https://www.instagram.com/")
    await page.waitForTimeout(5000)
    //await page.goForward();
    await page.goBack();
    await page.screenshot({path:'Insta.png'})

})*/

/*test('launch url', async({page})=>{
    await page.goto('https://www.demoblaze.com/')
    await page.waitForTimeout(4000)
//  await page.locator('id=login2').click()
await page.locator('#login2').click()
await page.waitForTimeout(4000)
await page.locator('//input[@id="loginusername"]').fill('karthi_234')
await page.locator('#loginpassword').fill('Karthi@1998')
await page.click('//button[normalize-space()="Log in"]')
await page.waitForTimeout(4000)
await page.screenshot({path:'demo.png'})

const logout =await page.locator("//a[normalize-space()='Log out']")
await expect(logout).toBeVisible()
})*/

test('filpkart',async({page})=>{
await page.goto('https://www.flipkart.com/')
await page.locator("(//div//input[@title='Search for Products, Brands and More'])[1]").fill('mobiles')
await page.locator("//button[@type='submit']").click()
await page.waitForTimeout(4000)
const links=await page.$$("//div[@class='ZFwe0M row']//div[@class='RG5Slk']")
for(const product of links){
    const name=await product.textContent()
    console.log(name)
}
})
