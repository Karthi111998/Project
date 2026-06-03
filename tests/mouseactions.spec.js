import {test,expect} from '@playwright/test'

test('mouseactions',async ({page}) => {
    await page.goto('https://vinothqaacademy.com/mouse-event/')
    await page.locator('#tooltipTarget').hover()
    const text=await page.locator('#tooltipStatus').textContent()
    // await expect(text).toHaveText('Tooltip Visible')
    console.log(text)

    
//    await page.dragAndDrop('#dragItem','#dropZone')
// const text1=await page.locator('#dragStatus').textContent()
// console.log(text1)



const src = page.locator('#dragItem').hover();

await page.mouse.down();          // click and hold 
await page.locator('#dropZone').hover();
await page.mouse.up();          //relase
await page.waitForTimeout(4000)
const text1=await page.locator('#dragStatus').textContent()
console.log(text1)






})

