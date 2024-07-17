const puppeteerExtra = require('puppeteer-extra');
const Stealth = require('puppeteer-extra-plugin-stealth');
puppeteerExtra.use(Stealth());

(async () => {
    
    const browser = await puppeteerExtra.launch({headless: false});
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.setUserAgent(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
      );
   
    await page.goto('URL/');
    await page.waitForNavigation(); // Wait for navigation to complete
    await page.waitForNetworkIdle(); // Wait for network resources to fully load
    await page.screenshot({path: 'img.png'});
      

    let arr = await page.evaluate(() => {
        let text = Array.from(document.querySelectorAll('#page-section__item-title'), el => el.innerText);
        return text;
    })
    console.log(arr);
    await browser.close();
})()
