import{test,expect} from'@playwright/test'

test('verfiy',async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

await page.locator('#male').check()
await expect(page.locator('#male').isChecked()).toBeTruthy()

expect(await page.locator('#female').isChecked()).toBeFalsy()


})