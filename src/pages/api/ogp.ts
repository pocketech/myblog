// path: /pages/api/open-graph-image.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import playwright from 'playwright-aws-lambda'

// getAbsoluteURL is in a snippet further down
import { getAbsoluteURL } from '@/utils/getAbsoluteURL'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const viewport = { width: 1200, height: 630 }
  playwright.loadFont(
    'https://raw.githack.com/googlei18n/noto-emoji/master/fonts/NotoColorEmoji.ttf'
  )
  const browser = await playwright.launchChromium()
  const page = await browser.newPage({ viewport })
  // Generate the full URL out of the given path (GET parameter)
  const relativeUrl = (req.query['path'] as string) || ''
  const url = getAbsoluteURL(relativeUrl)

  await page.goto(url, {
    timeout: 15 * 1000,
    // waitUntil option will make sure everything is loaded on the page
    waitUntil: 'networkidle',
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
