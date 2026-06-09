import test from '@playwright/test'

test('upload',async ({page}) => {

    await page.goto('https://www.file.io/')
    await page.setInputFiles('#select-files-input',['C:/Playwright/demo.png','Insta.png'])
    await page.waitForTimeout(5000)
})
test.only('download',async({page})=>{

    await page.goto('https://demoqa.com/upload-download')
    await page.setInputFiles('#uploadFile','demo.png')
    await page.waitForTimeout(4000)
 const [files]=await Promise.all([
    page.waitForEvent('download'),
    page.locator('#downloadButton').click()
 ])
    await files.saveAs('C:/Users/karth/OneDrive/Documents/class/samples.png')
})