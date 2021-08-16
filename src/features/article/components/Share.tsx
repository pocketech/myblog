import type { FlexProps } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from 'react-share'

type Props = {
  text: string
  url: string
} & FlexProps

export const Share: React.VFC<Props> = ({ text, url, ...others }) => {
  return (
    <Flex justify="center" gridGap="8" {...others}>
      <TwitterShareButton url={url} title={text}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>

      <FacebookShareButton url={url}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
    </Flex>
  )
}
