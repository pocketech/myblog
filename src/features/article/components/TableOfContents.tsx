import type { BoxProps } from '@chakra-ui/react'
import { Box, Stack } from '@chakra-ui/react'
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
    <Stack spacing="4" bg="gray.50" p="6" rounded="md" height="min" {...others}>
      <Box fontWeight="bold">目次</Box>
      <Stack as="ul">
        {toc.map((item) => (
          <Box as="li" key={item.id}>
            <a href={`#${item.id}`}>{item.text}</a>
          </Box>
        ))}
      </Stack>
    </Stack>
  )
}
