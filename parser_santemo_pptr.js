const puppeteer = require('puppeteer');



(async () => {
    
    const browser = await puppeteer.launch({headless: false, defaultViewport: null});
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
   
   
    await page.goto('https://santemo.ru/sales/');
    //await page.waitForNavigation(); // Wait for navigation to complete

    //await page.waitForNetworkIdle(); // Wait for network resources to fully load
    await page.screenshot({path: 'img.png'});
    //await page.waitForSelector('#dark_link color-theme-target');
      

    let arr = await page.evaluate(() => {
        let text = Array.from(document.querySelectorAll('sale-list-item-title>a'), el => el.innerText);
        return text;
    })
    console.log(arr);
    await browser.close();
})()
