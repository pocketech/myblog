import type { FlexProps } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from 'react-share'

type Props = {
  text: string
  url: string
  iconSpacing?: FlexProps['gridGap']
} & Pick<FlexProps, 'alignSelf'>

export const Share: React.VFC<Props> = ({ text, url, iconSpacing = '8', ...others }) => {
  return (
    <Flex gridGap={iconSpacing} {...others}>
      <TwitterShareButton url={url} title={text}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>

      <FacebookShareButton url={url}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
    </Flex>
  )
}
