import {test,expect} from '@playwright/test'

test('title',async({page})=>{
await page.goto('https://demoqa.com/alerts')
page.on('dialog',async(di)=>{

if(di.type()== 'alert'){
    di.accept()
    console.log('accepted')
}
else if(di.type()=='confirm'){
    di.dismiss()
    console.log('confimed alert cancelled')
}
else if(di.type()=='prompt'){
    di.accept('karthika')
}
    console.log(di.type())
    const message=di.message();
    console.log(message)

})
await page.locator('#alertButton').click()
await page.locator('#confirmButton').click()

await page.locator('#promtButton').click()
})

test('handling',async({page})=>{
    await page.goto('https://www.flipkart.com/')
    try{
     await page.locator('.qc0M7c',{timeout:5000})
     await page.locator('.qc0M7c').click()
     console.log('pop closed')
    }
catch{
console.log()
}

})  

test.only('dropdowns',async({page})=>{
    await page.goto('https://testautomationcentral.com/demo/dropdown.html')
    await page.locator('[class="tab px-4 py-2 text-blue-500 hover:bg-blue-200 focus:outline-none active"]').click()
    //await page.selectOption('[class="form-select block w-full mt-1"]',{value:'option2'})
   //await page.selectOption('[class="form-select block w-full mt-1"]','option 2')
   await page.selectOption('[class="form-select block w-full mt-1"]',{index:2})
   await page.waitForTimeout(5000)
 await page.locator('[data-target="multi-select-dropdown"]').click()
 await page.selectOption('[class="form-multiselect block w-full mt-1"]',[{value:'option2'},{value:'option4'}])

})

