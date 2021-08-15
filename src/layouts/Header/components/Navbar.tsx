import { Button, Flex } from '@chakra-ui/react'

import { ActiveAnchor } from './ActiveAnchor'

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
        <ActiveAnchor href={item.href} key={item.href}>
          {(isActive) => (
            <Button variant="ghost" bg={isActive ? 'gray.100' : 'inherit'} tabIndex={-1}>
              {item.caption}
            </Button>
          )}
        </ActiveAnchor>
      ))}
    </Flex>
  )
}
