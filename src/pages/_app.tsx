import 'tailwindcss/tailwind.css'

import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { config } from 'seo.config'

import { GoogleAnalytics, usePageView } from '@/libs/gtag'
import { theme } from '@/theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
  usePageView()
  const getLayout: (page: JSX.Element) => JSX.Element =
    (Component as any).getLayout || ((page) => page)
  return (
    <ChakraProvider theme={theme}>
      <GoogleAnalytics />
      <DefaultSeo {...config} />
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  )
}

export default MyApp
