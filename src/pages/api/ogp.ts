// path: /pages/api/open-graph-image.ts
import chromium from 'chrome-aws-lambda'
import type { NextApiRequest, NextApiResponse } from 'next'
import puppeteer from 'puppeteer-core'

// getAbsoluteURL is in a snippet further down
import { getAbsoluteURL } from '@/utils/getAbsoluteURL'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await chromium.font(
    'https://raw.githack.com/googlei18n/noto-emoji/master/fonts/NotoColorEmoji.ttf'
  )
  await chromium.font('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap')
  await chromium.font(
    'https://github.com/googlefonts/noto-cjk/blob/main/Sans/OTF/Japanese/NotoSansCJKjp-Medium.otf'
  )
  // Start the browser with the AWS Lambda wrapper (chrome-aws-lambda)
  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: {
      width: 1200,
      height: 630,
    },
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
  })
  // Create a page with the Open Graph image size best practise
  // 1200x630 is a good size for most social media sites
  const page = await browser.newPage()
  // Generate the full URL out of the given path (GET parameter)
  const relativeUrl = (req.query['path'] as string) || ''
  const url = getAbsoluteURL(relativeUrl)

  await page.goto(url, {
    timeout: 15 * 1000,
    // waitUntil option will make sure everything is loaded on the page
    waitUntil: 'networkidle0',
  })
  await page.evaluate(() => {
    const style = document.createElement('style')
    style.textContent = `
        @import url('//fonts.googleapis.com/earlyaccess/notosansjp.css');`
    document.head.appendChild(style)
    document.body.style.fontFamily = "'Noto Sans JP', sans-serif"
  })
  const data = await page.screenshot({
    type: 'png',
  })
  await browser.close()
  // Set the s-maxage property which caches the images then on the Vercel edge
  res.setHeader('Cache-Control', 's-maxage=31536000, stale-while-revalidate')
  res.setHeader('Content-Type', 'image/png')
  // write the image to the response with the specified Content-Type
  res.end(data)
}

export default handler
