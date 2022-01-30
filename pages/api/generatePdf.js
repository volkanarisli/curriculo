import puppeteer from "puppeteer"

const handler = async (req, res) => {
    const browser = await puppeteer.launch({
        executablePath: '/opt/homebrew/bin/chromium',
        headless: true,
        args: [
            '---single-process',
            '--no-sandbox',
            '--disable-setuid-sandbox',
            "--proxy-server='direct://",
            '--proxy-bypass-list=*',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--disable-gpu',
            '--disable-features=site-per-process',
            '--enable-features=NetworkService',
            '--allow-running-insecure-content',
            '--enable-automation',
            '--disable-background-timer-throttling',
            '--disable-backgrounding-occluded-windows',
            '--disable-renderer-backgrounding',
            '--disable-web-security',
            '--autoplay-policy=user-gesture-required',
            '--disable-background-networking',
            '--disable-breakpad',
            '--disable-client-side-phishing-detection',
            '--disable-component-update',
            '--disable-default-apps',
            '--disable-domain-reliability',
            '--disable-extensions',
            '--disable-features=AudioServiceOutOfProcess',
            '--disable-hang-monitor',
            '--disable-ipc-flooding-protection',
            '--disable-notifications',
            '--disable-offer-store-unmasked-wallet-cards',
            '--disable-popup-blocking',
            '--disable-print-preview',
            '--disable-prompt-on-repost',
            '--disable-speech-api',
            '--disable-sync',
            '--disk-cache-size=33554432',
            '--hide-scrollbars',
            '--ignore-gpu-blacklist',
            '--metrics-recording-only',
            '--mute-audio',
            '--no-default-browser-check',
            '--no-first-run',
            '--no-pings',
            '--no-zygote',
            '--password-store=basic',
            '--use-gl=swiftshader',
            '--use-mock-keychain'
        ],
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/fullPage', {
        waitUntil: 'networkidle2',
      });
    await page.waitForSelector('#design');          // wait for the selector to load
    const element = await page.$('#design');        // declare a variable with an ElementHandle
    // await element.pdf({ path: 'hn.pdf', format: 'a4' }); // take screenshot element in puppeteer
    const png = await element.screenshot({ path: 'resume.png' });
    // close browser
    const pdf = await page.pdf({ path: 'hn.pdf', format: 'a4' });
    console.log(pdf)
    await browser.close();
    res.setHeader('Content-Disposition', "attachment; resume.png")
    res.status(200).send(pdf)
    return png
}


export default handler