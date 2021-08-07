import type { DefaultSeoProps } from 'next-seo/lib/types'

export const config: DefaultSeoProps = {
  title: 'Pocke-tech Blog',
  openGraph: {
    title: 'Pocke-tech Blog',
    description: '技術ブログです。日々学んだことをアウトプットしていきます。',
    type: 'website',
    locale: 'ja_jp',
    url: '/',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    site_name: 'Pocke-tech Blog',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary',
  },
  additionalMetaTags: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
  ],
  additionalLinkTags: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'icon', href: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    { rel: 'icon', href: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
  ],
}
