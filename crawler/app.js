const https = require('https');
const cheerio = require('cheerio')

const years = [];
for (let i = 1200; i < 1220; i ++) {
    years.push(i);
}

console.log(years);

years.map(year => {
    https.get("https://en.wikipedia.org/wiki/" + year, resp => {

        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });


        resp.on('end', () => {
            const $ = cheerio.load(data);
            const text = $('h2 .mw-headline').toArray().filter(element => {
                // console.log(element);
                return $(element).text().trim() === "Events"
            })[0];

            // const el = $('h2 .mw-headline').toArray();
            // console.log(el);
            console.log($(text).parent().next().find("li").toArray().map(t => year + ":" + $(t).text()).join("\n"));
        });
    });
});

