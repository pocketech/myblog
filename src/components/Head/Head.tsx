import { NextSeo } from 'next-seo'

type Props = {
  ogTitle: string
  ogDescription: string
  ogImageUrl: string
}

export const Head: React.VFC<Props> = ({ ogTitle, ogDescription, ogImageUrl }) => {
  return (
    <NextSeo
      openGraph={{
        images: [
          {
            url: ogImageUrl,
            width: 1200,
            height: 630,
            alt: 'og image',
          },
        ],
        title: ogTitle,
        description: ogDescription,
      }}
    />
  )
}
