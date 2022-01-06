import { Box, Center, Flex } from '@chakra-ui/react'
import type { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'

import { Logo } from '@/components/Logo'
import { OGP_IMAGE_SIZE } from '@/constants/ogpImageSize'
import type { Article } from '@/features/article'
import { client } from '@/libs/client'
import { formatDateFromUTC } from '@/libs/dayjs'

type Props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get<{ contents: Article[] }>({ endpoint: 'articles' })
  const paths = data.contents.map((content) => ({
    params: { id: content.id },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id
  const data = await client.get<Article>({ endpoint: 'articles', contentId: id as string })
  return {
    props: {
      article: data,
    },
  }
}

const Page: NextPage<Props> = ({ article }) => {
  return (
    <Center
      w={`${OGP_IMAGE_SIZE.width}px`}
      h={`${OGP_IMAGE_SIZE.height}px`}
      bgGradient="linear(to-r, teal.500,green.500)"
      p="8"
    >
      <Flex flexDir="column" p="6" boxShadow="lg" rounded="xl" w="full" h="full" bg="white">
        <Box as="h1" fontSize="7xl" fontWeight="bold">
          {article.title}
        </Box>
        <Box textColor="gray.700" fontSize="xl" mt="4">
          {formatDateFromUTC(article.publishedAt, 'JpDateTime')}
        </Box>
        <Box as="p" fontSize="3xl" mt="4">
          {article.summary}
        </Box>
        {/* 右下寄せ */}
        <Logo ml="auto" mt="auto" />
      </Flex>
    </Center>
  )
}
export default Page
