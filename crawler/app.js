const https = require('https');
const cheerio = require('cheerio')

const years = [];
for (let i = 1900; i < 1929; i ++) {
    years.push(i);
}

const promises = [];

let result = years.reduce((acc, curr) => {
    acc[curr] = [];
    return acc;
}, {});

function addEvent(year, event) {
    const cleaned = event
        .replace(new RegExp("\"", 'g'), "'")
        .replace(new RegExp("\n", 'g'), "");
    result[year].push(`"${cleaned}"`);
}

years.map(year => {
    promises.push(new Promise((resolve) => {
        https.get("https://en.wikipedia.org/wiki/" + year, resp => {
            const theYear = year;
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
    
                const h2 =  $(text).parent();
                let ul = h2.next();
                
                while (ul.is("h3") || ul.is("h4")) {
                    ul = ul.next();
                }
    
                // const el = $('h2 .mw-headline').toArray();
                // console.log(el);
                ul.find("li").toArray().map(t => addEvent(theYear, $(t).text()));
                
                resolve();
    
            });
        });
    }));
    
});

Promise.all(promises).then(r => {
    years.forEach(y => {
        console.log(`year(${y}, [${result[y].join(",")}]),`)
    });
});
