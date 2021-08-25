import type { BoxProps } from '@chakra-ui/react'
import { Box, Stack, Text } from '@chakra-ui/react'
import cheerio from 'cheerio'

type Props = {
  body: string
} & BoxProps
export const TableOfContents: React.VFC<Props> = ({ body, ...others }) => {
  const $ = cheerio.load(body)
  const headings = $('h2, h3').toArray()
  const toc = headings.map((heading) => ({
    text: (heading.children[0] as any).data,
    id: heading.attribs.id,
    name: heading.name,
  }))
  return (
    <Box bg="gray.50" p="6" rounded="md" height="min" {...others}>
      <Text fontWeight="bold">目次</Text>
      <Stack as="ul">
        {toc.map((item) => (
          <Box as="li" key={item.id}>
            <a href={`#${item.id}`}>{item.text}</a>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}
