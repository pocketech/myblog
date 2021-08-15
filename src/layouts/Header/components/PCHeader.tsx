import { chakra, Flex } from '@chakra-ui/react'
import Link from 'next/dist/client/link'

import { Logo } from '@/components/Logo'

import { NavBar } from './Navbar'
import { SocialIcons } from './SocialIcons'

export const PCHeader: React.VFC = () => {
  return (
    <chakra.header
      position="sticky"
      top="0"
      zIndex="sticky"
      borderBottomWidth="thin"
      background="white"
      px={{ base: 4, sm: 6, lg: 8 }}
    >
      <Flex justify="space-between" alignItems="center">
        <Flex alignItems="center" gridGap="4">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <NavBar />
        </Flex>
        <SocialIcons />
      </Flex>
    </chakra.header>
  )
}
