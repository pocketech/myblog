import { Box, chakra, Flex, Stack, useBreakpointValue } from '@chakra-ui/react'

import { formatDateFromUTC } from '@/libs/dayjs'

import type { Article } from '../types'
import { TableOfContents } from './TableOfContents'

type Props = {
  article: Article
}
export const Detail: React.VFC<Props> = ({ article }) => {
  const isLargerThanLg = useBreakpointValue({ lg: true })
  return (
    <Flex gridGap={{ base: 0, lg: 14 }}>
      <Box>
        <Stack spacing="20">
          <Stack spacing="4">
            <chakra.h1 fontSize="4xl">{article.title}</chakra.h1>
            <p>公開日: {formatDateFromUTC(article.publishedAt, 'JpMonthDateTime')}</p>
            <chakra.p>{article.summary}</chakra.p>
            {!isLargerThanLg && <TableOfContents body={article.body} />}
          </Stack>
          <Box
            className="prose prose-lg"
            maxW="7xl"
            dangerouslySetInnerHTML={{
              // eslint-disable-next-line @typescript-eslint/naming-convention
              __html: `${article.body}`,
            }}
          />
        </Stack>
      </Box>
      <Box>
        {isLargerThanLg && <TableOfContents body={article.body} position="sticky" top="40" />}
      </Box>
    </Flex>
  )
}
