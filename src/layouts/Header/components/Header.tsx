import type { PositionProps } from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/react'
import { chakra, Flex } from '@chakra-ui/react'
import Link from 'next/dist/client/link'

import { Logo } from '@/components/Logo'
import { GUTTER } from '@/layouts/constants'

import { NavBar } from './Navbar'
import { SocialIcons } from './SocialIcons'

type Props = PositionProps

export const Header: React.VFC<Props> = ({ ...positionProps }) => {
  const isLargerThan2xl = useBreakpointValue({ '2xl': true })
  return (
    <chakra.header borderBottomWidth="thin" bgColor="white" px={GUTTER} {...positionProps}>
      <Flex alignItems="center">
        <Flex alignItems="center" gridGap="4">
          <Link href="/">
            <a>
              <Logo width={{ base: '48', sm: '64' }} />
            </a>
          </Link>
          <NavBar
            size={isLargerThan2xl ? 'md' : 'sm'}
            display={{ base: 'none', lg: 'initial' }}
            ml={{ lg: '4' }}
          />
        </Flex>
        <SocialIcons ml="auto" />
      </Flex>
    </chakra.header>
  )
}
