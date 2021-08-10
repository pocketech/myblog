import { chakra, Text } from '@chakra-ui/react'
import type { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'

import type { Article } from '@/features/article'
import { client } from '@/libs/client'

type Props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get<{ contents: Article[] }>({ endpoint: 'articles' })
  const paths = data.contents.map((content) => `/articles/${content.id}/ogp`)
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
    <chakra.div>
      <chakra.h1 fontFamily="ogp">{article.title}</chakra.h1>
      <chakra.p fontFamily="acme">{article.publishedAt}</chakra.p>
      <Text fontFamily="noto">OGPテスト</Text>
      <div
        dangerouslySetInnerHTML={{
          // eslint-disable-next-line @typescript-eslint/naming-convention
          __html: `${article.body}`,
        }}
      />
    </chakra.div>
  )
}
export default Page
