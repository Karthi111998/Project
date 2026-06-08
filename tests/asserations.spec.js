import {test,expect} from '@playwright/test'

test('verify',async ({page}) => {
    await page.goto('https://www.flipkart.com/')
    // await expect(page).toHaveURL('https://www.flipkart.com/')
    // await expect(page).toHaveTitle('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')
    //await expect(page.locator("//div//a[normalize-space()='Login']")).toBeEnabled()



    await expect.soft(page).toHaveURL('https://www.flipkart.com/')
    await expect.soft(page).toHaveTitle('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')
    await expect.soft(page.locator("//div//a[normalize-space()='Login']")).toBeEnabled()
    
})