# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: task.spec.js >> sampletask
- Location: tests\task.spec.js:12:6

# Error details

```
ReferenceError: chromium is not defined
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | // //fixture-golbal variable we have multiple fixtures: page, browser 
  4  | // test('home', async ({ page }) => {
  5  | //   await page.goto('https://www.dummyticket.com/')
  6  | //   await page.waitForTimeout(2000);
  7  | // await page.goto('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
  8  | //   await page.goBack()
  9  | // await page.waitForTimeout(5000);
  10 | // await page.goForward()
  11 | //   });
  12 | test.only('sampletask',async()=> {
> 13 |     const browser=await chromium.launch()
     |                   ^ ReferenceError: chromium is not defined
  14 |     const context=await browser.newContext()
  15 |     const page=await context.newPage()
  16 |     await page.goto('https://www.flipkart.com/')
  17 |     
  18 | })
  19 | 
```