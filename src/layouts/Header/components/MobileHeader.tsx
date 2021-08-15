import { Box, chakra, Flex, Stack } from '@chakra-ui/react'
import Link from 'next/dist/client/link'

import { Logo } from '@/components/Logo'

import { NavBar } from './Navbar'
import { SocialIcons } from './SocialIcons'

export const MobileHeader: React.VFC = () => {
  return (
    <chakra.header
      position="sticky"
      top="0"
      zIndex="sticky"
      borderBottomWidth="thin"
      pb="2"
      background="white"
    >
      <Stack spacing="-2" px={{ base: 4, sm: 6, lg: 8 }}>
        <Flex justify="space-between" py="4" alignItems="center">
          <Link href="/">
            <a>
              <Logo width={{ base: '2xs', md: 'xs' }} />
            </a>
          </Link>
          <SocialIcons />
        </Flex>
        <Box maxW="sm">
          <NavBar />
        </Box>
      </Stack>
    </chakra.header>
  )
}
