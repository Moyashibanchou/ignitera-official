const puppeteer = require('puppeteer');
(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 800 });

        page.on('pageerror', error => {
            console.error('PAGE ERROR', error.message);
        });

        page.on('console', msg => {
            if (msg.type() === 'error') {
                console.log('CONSOLE ERROR:', msg.text());
            }
        });

        await page.goto('http://localhost:3000/methodology', { waitUntil: 'networkidle0' });

        // Scroll down
        await page.evaluate(() => window.scrollBy(0, window.innerHeight));
        await page.waitForTimeout(1000);
        await page.screenshot({ path: 'methodology_scroll1.png' });

        await page.evaluate(() => window.scrollBy(0, window.innerHeight));
        await page.waitForTimeout(1000);
        await page.screenshot({ path: 'methodology_scroll2.png' });

        await browser.close();
    } catch (e) {
        console.error("Script error:", e);
    }
})();
