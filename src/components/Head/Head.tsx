import { DefaultSeo, NextSeo } from 'next-seo'

import { config } from '../../../seo.config'

const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://development.dbf6qph5n2a5p.amplifyapp.com'
    : 'http://localhost:3036'

export const Head: React.VFC = () => {
  // const { query } = useRouter();
  const ogImageUrl = `${baseUrl}/og_image.jpg`

  return (
    <>
      <DefaultSeo {...config} />
      <NextSeo
        openGraph={{
          images: [
            {
              url: ogImageUrl,
              width: 1200,
              height: 630,
              alt: 'default og image',
            },
          ],
        }}
      />
    </>
  )
}
