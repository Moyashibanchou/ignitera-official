const puppeteer = require('puppeteer');
(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        page.on('pageerror', error => {
            console.error('PAGE ERROR', error.message);
        });

        page.on('console', msg => {
            if (msg.type() === 'error') {
                console.log('CONSOLE ERROR:', msg.text());
            }
        });

        console.log("Loading methodology...");
        await page.goto('http://localhost:3000/methodology', { waitUntil: 'networkidle0', timeout: 30000 });
        console.log("Methodology load complete.");

        console.log("Loading home...");
        await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0', timeout: 30000 });
        console.log("Home load complete.");

        await browser.close();
    } catch (e) {
        console.error("Script error:", e);
    }
})();
