import { Button, Flex } from '@chakra-ui/react'

import { ActiveLink } from './ActiveLink'

const NAVIGATION = [
  {
    caption: 'HOME',
    href: '/',
  },
  {
    caption: 'ABOUT',
    href: '/about',
  },
  {
    caption: 'WORKS',
    href: '/works',
  },
  {
    caption: 'CONTACT',
    href: '/contact',
  },
]

/**
 * @package
 */
export const NavBar: React.VFC = () => {
  return (
    <Flex justify="space-between" mx="1.5" as="nav">
      {NAVIGATION.map((item) => (
        <ActiveLink href={item.href} key={item.href} passHref>
          {(isActive) => (
            <Button variant="ghost" bg={isActive ? 'gray.100' : 'inherit'} as="a">
              {item.caption}
            </Button>
          )}
        </ActiveLink>
      ))}
    </Flex>
  )
}
