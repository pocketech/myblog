import type { LayoutProps, PositionProps } from '@chakra-ui/react'
import { Box, Flex, Icon, VStack } from '@chakra-ui/react'

import { NAVIGATION } from '../constants'
import { ActiveLink } from './ActiveLink'

type Props = Pick<LayoutProps, 'display'> & PositionProps
export const TabBar: React.VFC<Props> = ({ ...others }) => {
  return (
    <Flex as="nav" bg="white" borderTopWidth="1px" py="0.5" {...others}>
      {NAVIGATION.map((item) => (
        <ActiveLink rootPath="/" href={item.href} key={item.href.pathname} passHref>
          {(isActive) => (
            <VStack spacing="0.5" flex="1" as="a" color={isActive ? 'gray.900' : 'gray.400'}>
              <Icon as={item.icon} boxSize="5" mt="1" mb="0.5" />
              <Box as="span" fontSize="xx-small">
                {item.name}
              </Box>
            </VStack>
          )}
        </ActiveLink>
      ))}
    </Flex>
  )
}
