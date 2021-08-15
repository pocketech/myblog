import { Box, useBreakpointValue } from '@chakra-ui/react'

import { Footer } from './Footer'
import { MobileHeader, PCHeader } from './Header'

export const BaseLayout: React.FC = ({ children }) => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column" justifyContent="space-between">
      {useBreakpointValue({ lg: true }) ? <PCHeader /> : <MobileHeader />}

      <Box
        py="4"
        px={{ base: 4, sm: 6, lg: 8 }}
        // Container styles
        maxW={{ base: '7xl', sm: '8xl' }}
        mx="auto"
      >
        <main>{children}</main>
      </Box>

      <Footer />
    </Box>
  )
}
