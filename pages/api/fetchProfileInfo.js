// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import puppeteer from 'puppeteer'

import axios from "axios"

//clientId = 77ytuhlgnpttdr
//clientSecret = gzGDVWd1aV1ITAM6
const hayaller = async (req, res) => {
  // AQEDASFeuHoD3D3RAAABflkGSj4AAAF-qcukvU0AYu7Aa3gNJvfyE1xxPj5j2zBz_s3kxocfpUdYY16GnpU14U_yXDgtdfFRWt3WTlJkrmfiTHUpyEYpbIAUTnTE_1WinlToA-XeUTjB4ANzmiWS1B0-
  // const cookies = [
  //   {
  //     'name': 'li_at',
  //     'value': 'AQEDASFeuHoD3D3RAAABflkGSj4AAAF-qcukvU0AYu7Aa3gNJvfyE1xxPj5j2zBz_s3kxocfpUdYY16GnpU14U_yXDgtdfFRWt3WTlJkrmfiTHUpyEYpbIAUTnTE_1WinlToA-XeUTjB4ANzmiWS1B0-',
  //     'domain': '.www.linkedin.com'
  //   },
  // ];
  // const userAgent = 'Mozilla/5.0 (X11; Linux x86_64)' +
  // 'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36';

  // console.log(url)
  // const browser = await puppeteer.launch({
  //   executablePath: '/opt/homebrew/bin/chromium',
  //   headless: true,
  //   args: [
  //     '---single-process',
  //     '--no-sandbox',
  //     '--disable-setuid-sandbox',
  //     "--proxy-server='direct://",
  //     '--proxy-bypass-list=*',
  //     '--disable-dev-shm-usage',
  //     '--disable-accelerated-2d-canvas',
  //     '--disable-gpu',
  //     '--disable-features=site-per-process',
  //     '--enable-features=NetworkService',
  //     '--allow-running-insecure-content',
  //     '--enable-automation',
  //     '--disable-background-timer-throttling',
  //     '--disable-backgrounding-occluded-windows',
  //     '--disable-renderer-backgrounding',
  //     '--disable-web-security',
  //     '--autoplay-policy=user-gesture-required',
  //     '--disable-background-networking',
  //     '--disable-breakpad',
  //     '--disable-client-side-phishing-detection',
  //     '--disable-component-update',
  //     '--disable-default-apps',
  //     '--disable-domain-reliability',
  //     '--disable-extensions',
  //     '--disable-features=AudioServiceOutOfProcess',
  //     '--disable-hang-monitor',
  //     '--disable-ipc-flooding-protection',
  //     '--disable-notifications',
  //     '--disable-offer-store-unmasked-wallet-cards',
  //     '--disable-popup-blocking',
  //     '--disable-print-preview',
  //     '--disable-prompt-on-repost',
  //     '--disable-speech-api',
  //     '--disable-sync',
  //     '--disk-cache-size=33554432',
  //     '--hide-scrollbars',
  //     '--ignore-gpu-blacklist',
  //     '--metrics-recording-only',
  //     '--mute-audio',
  //     '--no-default-browser-check',
  //     '--no-first-run',
  //     '--no-pings',
  //     '--no-zygote',
  //     '--password-store=basic',
  //     '--use-gl=swiftshader',
  //     '--use-mock-keychain'
  //   ],
  // })
  // const page = await browser.newPage()
  // await page.setCookie(...cookies);

  // await page.setUserAgent(userAgent);
  // await page.goto(url)

  // const [el] = await page.$x('//*[@id="ember43"]')
  // const src = await el.getProperty('src')
  // const srcText = src.jsonValue()
  // console.log(srcText)
  // await page.waitForSelector('#main');
  // let texts = await page.evaluate(() => document.getElementById('main'));
  // console.log(texts)
  const { code } = req.body
  try {
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('client_id', process.env.LINKEDIN_CLIENT_ID);
    params.append('client_secret', process.env.LINKEDIN_CLIENT_SECRET);
    params.append('redirect_uri', 'http://localhost:3000/');
    const { data: { access_token } } = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', params)

    const config = {
      headers: { Authorization: `Bearer ${access_token}` }
    };
    const { data } = await axios.get(
      'https://api.linkedin.com/v2/me',
      config
    )
    console.log(data)
    res.status(200).json({ data })
  } catch (error) {
    console.log(error)
  }



}

const handler = async (req, res) => {

}


export default handler