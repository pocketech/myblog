import { Box, Flex, Stack } from '@chakra-ui/react'

import { formatDateFromUTC } from '@/libs/dayjs'
import { getAbsoluteURL } from '@/utils/getAbsoluteURL'

import type { Article } from '../types'
import { Share } from './Share'
import { TableOfContents } from './TableOfContents'

type Props = {
  article: Article
}
export const Detail: React.VFC<Props> = ({ article }) => {
  return (
    <Flex direction={{ base: 'column-reverse', lg: 'row' }} gridGap={{ base: '8', lg: '14' }}>
      <Stack spacing="16" flex={{ lg: '2' }}>
        <Stack spacing="4">
          <Box as="h1" textStyle="screenTitle">
            {article.title}
          </Box>
          <Box as="span" textStyle="label" textColor="gray.500">
            公開日: {formatDateFromUTC(article.publishedAt, 'JpMonthDateTime')}
          </Box>
          <Box textStyle="paragraphSm">{article.summary}</Box>
        </Stack>
        <Box
          className="prose prose-lg"
          dangerouslySetInnerHTML={{
            // eslint-disable-next-line @typescript-eslint/naming-convention
            __html: `${article.body}`,
          }}
        />
      </Stack>
      {/* NOTE: stickyを効かせるためのコンテナ */}
      <Box flex={{ lg: '1' }}>
        <Stack position={{ lg: 'sticky' }} top={{ lg: '40' }} spacing="4">
          <TableOfContents body={article.body} />
          <Share
            alignSelf={{ lg: 'center' }}
            iconSpacing={{ base: '4', lg: '8' }}
            url={getAbsoluteURL(`/articles/${article.id}`)}
            text={article.title}
          />
        </Stack>
      </Box>
    </Flex>
  )
}
