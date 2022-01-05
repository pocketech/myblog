import { chakra } from '@chakra-ui/react'

import { Footer } from './Footer'
import { Header } from './Header'
import { TabBar } from './Header/components/Tabbar'

export const BaseLayout: React.FC = ({ children }) => {
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

      <chakra.main
        flex="1"
        py="4"
        px={{ base: 4, sm: 6, lg: 8 }}
        // Container styles
        maxW={{ base: '7xl', sm: '8xl' }}
        mx="auto"
      >
        {children}
      </chakra.main>
      <Footer />
      <TabBar display={{ base: 'flex', lg: 'none' }} position="sticky" bottom="0" zIndex="sticky" />
    </>
  )
}
