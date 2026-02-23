const puppeteer = require('puppeteer');
(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 800 });

        await page.goto('http://localhost:3000/methodology', { waitUntil: 'networkidle0' });
        await page.screenshot({ path: 'methodology_screenshot.png' });

        console.log("Screenshot taken.");
        await browser.close();
    } catch (e) {
        console.error("Script error:", e);
    }
})();
