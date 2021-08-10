import '@fontsource/m-plus-rounded-1c'
import '@fontsource/noto-sans-jp'
import '@fontsource/acme'

import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { config } from 'seo.config'

import { theme } from '@/theme'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks')
}
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo {...config} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
