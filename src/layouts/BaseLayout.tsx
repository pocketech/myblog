import type { LayoutProps } from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'

import { GUTTER } from './constants'
import { Footer } from './Footer'
import { Header } from './Header'
import { TabBar } from './Header/components/Tabbar'

type Props = {
  contentWidth?: LayoutProps['maxW']
}

export const BaseLayout: React.FC<Props> = ({ children, contentWidth }) => {
  return (
    <>
      <style jsx global>
        {`
          html {
            height: 100%;
          }
          body {
            display: flex;
            flex-direction: column;
          }
          #__next {
            display: contents;
          }
        `}
      </style>

      <Header position={{ lg: 'sticky' }} top="0" zIndex="sticky" />

      <chakra.main maxW={contentWidth} mt="8" flex="1" px={{ ...GUTTER, '2xl': 0 }} mx="auto">
        {children}
      </chakra.main>
      <Footer />
      <TabBar display={{ base: 'flex', lg: 'none' }} position="sticky" bottom="0" zIndex="sticky" />
    </>
  )
}
