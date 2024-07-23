const { JSDOM } = require('jsdom');
const fs = require('fs');
//const names = [];
//const times = [];
//const links = [];
//const imglinks = [];
const data = [];

(async () => {
    try {
        const dom = await JSDOM.fromURL('https://santemo.ru/sales/');
        const d = dom.window.document;
        let blocks = d.querySelectorAll('div.sale-list__wrapper.grid-list__item');
        blocks.forEach( block => {
            let name = block.querySelector('a.dark_link.color-theme-target').textContent;
            let time = block.querySelector('span.countdown__active-to.hidden').textContent;
            let link = "https://santemo.ru" + block.querySelector('a.sale-list__item-link').getAttribute('href');
            let imglink = "https://santemo.ru" + block.querySelector('span.sale-list__item-image').getAttribute('data-bg');
            data.push(name.trim(),time.trim(),link, imglink);
            console.log(`название акции: ${name.trim()} ; сроки проведения: ${time.trim()}; ссылка: ${link}`);
        });
        if (data.length > 0) {
            console.log(JSON.stringify(data, null, ' '));
            fs.writeFile('data.csv', JSON.stringify(data), (err) => {
                if (err) throw err;
        
                console.log("saved");
            });
        }
    } catch (e) {
        console.log(e);
    }
})();