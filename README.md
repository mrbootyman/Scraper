# Scraper
Web scraping using node js puppeteer, puppeteer extra
In this case puppeteer open the new Chromium page inside async function, taking screenshot, looking for selector in HTML, take the text and push it in array. Looks not difficult but if website has a CAPTCHA, this code doesn't work. For manually solve the CAPTCHAs i use 'page.waitForNavigation()' but it also doesn't work cause CAPTCHAs knows that puppeteer open page.
