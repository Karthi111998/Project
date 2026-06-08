import{test, expect} from "@playwright/test"

/*page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured)*/

test('image',async({page})=>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const logo = await page.getByAltText('company-branding')
    await page.waitForTimeout(5000)

    await expect(logo).toBeVisible()

    //page.getByPlaceholder()

    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
// page.getByRole()- is we have login button
    await page.getByRole('button',{type:'submit'}).click()

// page.getByText() - by text contents

const text=await page.locator("//p[@class='oxd-userdropdown-name']").textContent()

await expect(await page.getByText(text)).toBeVisible();
// page.getByLabel()-
//example-<label>Password <input type="password" /></label>
// await page.getByLabel('Password').fill('secret');

//page.getByTestId()---
//<button data-testid="directions">Itinéraire</button>

//await page.getByTestId('directions').click();

//page.getByTitle()-
//<span title='Issues count'>

//await expect(page.getByTitle('Issues count')).toHaveText('25 issues');

})