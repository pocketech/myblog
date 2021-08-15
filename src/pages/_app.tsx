import 'tailwindcss/tailwind.css'

import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { config } from 'seo.config'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks')
}
const MyApp = ({ Component, pageProps }: AppProps) => {
  const getLayout: (page: JSX.Element) => JSX.Element =
    (Component as any).getLayout || ((page) => page)
  return (
    <ChakraProvider>
      <DefaultSeo {...config} />
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  )
}

export default MyApp
