import { Flex, Icon } from '@chakra-ui/react'
import { VscGithubInverted, VscMail, VscTwitter } from 'react-icons/vsc'

export const SocialIcons: React.VFC = () => {
  return (
    <Flex gridGap={{ base: '4', sm: '6' }}>
      <a href="https://twitter.com/pochi2pocket" rel="noreferrer" target="_blank">
        <Icon as={VscTwitter} w={8} h={8} color="gray.600" />
      </a>
      <a href="https://github.com/pocketech" rel="noreferrer" target="_blank">
        <Icon as={VscGithubInverted} w={8} h={8} color="gray.600" />
      </a>
      <a href="#" target="_blank">
        <Icon as={VscMail} w={8} h={8} color="gray.600" />
      </a>
    </Flex>
  )
}
