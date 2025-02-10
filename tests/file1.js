const {chromium,devices} = require ('Playwright');
const iPhone = devices['iPhone 15 Pro Max'];


(async() => {
    const browser = chromium.launch({headless: false});

    const context1 = (await browser).newContext({
        ...iPhone,
        permissions: ['geolocation'],
        geolocation: {latitude: 52.52, longitude: 13.405}
    });
    const context2 = (await browser).newContext();

    const page1 = (await context1).newPage();
    const page2 = (await context2).newPage();

    (await page1).goto('https://playwright.dev/');
    (await page2).goto('https://google.com/');
})();