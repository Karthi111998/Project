import{test,except} from '@playwright/test'

test('check',async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

   await expect( page.getByPlaceholder('Enter Name')).toBeEmpty()

  await expect( page.getByPlaceholder('Enter Name')).toBeEditable()


    await page.getByPlaceholder('Enter Name').fill('karthika')
    await page.waitForTimeout(5000)
})