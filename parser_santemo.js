const { JSDOM } = require('jsdom');
const data = [];

(async () => {
    try {
        const dom = await JSDOM.fromURL('https://santemo.ru/sales/');
        const d = dom.window.document;
        let blocks = d.querySelectorAll('div.dark_link.color-theme-target');
        blocks.forEach( block => {
            let name = block.querySelector('div.dark_link.color-theme-target').textContent;
            //let time = block.querySelector('div.page-section__item-date').textContent;
            data.push(name);
            console.log(`название акции: ${name}`);
        });
        if (data.length > 0) {
            console.log(JSON.stringify(data, null, ' '));
        }
    } catch (e) {
        console.log(e);
    }
})();