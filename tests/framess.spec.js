import test from '@playwright/test'

test('single frame',async ({page}) => {
    await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame')
    const frame=await page.frameLocator('[name="globalSqa"]')
    await frame.locator('[href="https://www.globalsqa.com/training/jmeter-training/"]').click()

    await frame.locator('[href="https://www.globalsqa.com/training/mobile-apps-testing-online-training/"]').click()
})

test.only('nested frames',async ({page}) => {

    await page.goto('https://www.tutorialspoint.com/selenium/practice/frames.php')
    const frame1= await page.frameLocator('(//iframe[@src="new-tab-sample.php"])[1]')
    await frame1.locator('//a[@href="/selenium/index.htm"]').click();
  

    const frame2= await page.frameLocator('(//iframe[@src="new-tab-sample.php"])[2]')
    await frame2.locator('//a[@href="/selenium/index.htm"]').click();
    await page.waitForTimeout(5000)
})