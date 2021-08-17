import { Flex, Heading, Stack, Text } from '@chakra-ui/react'
import type { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'

import type { Article } from '@/features/article'
import { client } from '@/libs/client'

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
    <Flex
      w="1200px"
      h="630px"
      bgGradient="linear(to-r, teal.500,green.500)"
      align="center"
      justify="center"
      p="8"
      direction="column"
    >
      <Stack spacing="4" p="6" boxShadow="lg" rounded="xl" w="full" h="full" bg="white" inset="">
        <Heading as="h1" fontSize="7xl">
          {article.title}
        </Heading>
        <p>{article.publishedAt}</p>
        <Text>
          OGPテスト
          <span role="img" aria-label="ok">
            🙆
          </span>
        </Text>
      </Stack>
    </Flex>
  )
}
export default Page
