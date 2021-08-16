import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPageWithLayout,
} from 'next'

import { Head } from '@/components/Head'
import { useOpenGraphImage } from '@/components/Head/useOpenGraphImage'
import type { Article } from '@/features/article'
import { Detail } from '@/features/article/components/Detail'
import { BaseLayout } from '@/layouts/BaseLayout'
import { client } from '@/libs/client'

type Props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get<{ contents: Article[] }>({ endpoint: 'articles' })
  const paths = data.contents.map((content) => `/articles/${content.id}`)
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

const Page: NextPageWithLayout<Props> = ({ article }) => {
  const { imageURL } = useOpenGraphImage()
  return (
    <>
      <Head ogTitle={article.title} ogDescription={article.body} ogImageUrl={imageURL} />
      <Detail article={article} />
    </>
  )
}
Page.getLayout = (page: React.ReactElement) => <BaseLayout>{page}</BaseLayout>

export default Page
