const puppeteer = require('puppeteer');
(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        page.on('pageerror', error => {
            console.error('PAGE_ERROR:', error.message);
        });

        page.on('console', msg => {
            if (msg.type() === 'error') {
                console.log('CONSOLE_ERROR:', msg.text());
            }
        });

        console.log("Loading methodology...");
        const response = await page.goto('http://localhost:3000/methodology', { waitUntil: 'networkidle0' });
        console.log("Status:", response.status());
        console.log("Methodology load complete.");

        console.log("Taking screenshot...");
        await page.screenshot({ path: 'methodology_screenshot.png' });

        await browser.close();
    } catch (e) {
        console.error("Script error:", e);
    }
})();
