import chromium from "chrome-aws-lambda";
import type { NextApiRequest, NextApiResponse } from "next";

import { OGP_IMAGE_SIZE } from "@/constants/ogpImageSize";
import { getAbsoluteURL } from "@/utils/getAbsoluteURL";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await chromium.font(
    "https://ghcdn.rawgit.org/googlefonts/noto-emoji/main/fonts/NotoColorEmoji.ttf"
  );
  await chromium.font(
    "https://ghcdn.rawgit.org/googlefonts/noto-cjk/main/Sans/SubsetOTF/JP/NotoSansJP-Medium.otf"
  );
  // Start the browser with the AWS Lambda wrapper (chrome-aws-lambda)
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: {
      width: OGP_IMAGE_SIZE.width,
      height: OGP_IMAGE_SIZE.height,
    },
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
  });
  // Create a page with the Open Graph image size best practise
  // 1200x630 is a good size for most social media sites
  const page = await browser.newPage();
  // Generate the full URL out of the given path (GET parameter)
  const relativeUrl = (req.query["path"] as string) || "";
  const url = getAbsoluteURL(relativeUrl);

  await page.goto(url, {
    timeout: 15 * 1000,
    // waitUntil option will make sure everything is loaded on the page
    waitUntil: "load",
  });
  const data = await page.screenshot({
    type: "png",
  });
  await browser.close();
  // Set the s-maxage property which caches the images then on the Vercel edge
  res.setHeader("Cache-Control", "s-maxage=31536000, stale-while-revalidate");
  res.setHeader("Content-Type", "image/png");
  // write the image to the response with the specified Content-Type
  res.end(data);
};

export default handler;
