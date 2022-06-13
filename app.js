// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.setViewport({
//     width: 5000,
//     height: 2500,
//     deviceScaleFactor: 1,
//   });
//   await page.goto('https://sergioriverafl.space');
//   await page.screenshot({ path: 'example.png' });

//   await browser.close();
// })();

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://sergioriverafl.space');
  // other actions...
//   await browser.close();
})();