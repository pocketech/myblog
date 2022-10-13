import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPageWithLayout,
} from "next";

import { Head } from "@/components/Head";
import type { Article } from "@/features/article";
import { Detail } from "@/features/article/components/Detail";
import { BaseLayout } from "@/layouts/BaseLayout";
import { client } from "@/libs/client";
import { getAbsoluteURL } from "@/utils/getAbsoluteURL";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get<{ contents: Article[] }>({
    endpoint: "articles",
  });
  const paths = data.contents.map((content) => ({
    params: { id: content.id },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.["id"];
  const data = await client.get<Article>({
    endpoint: "articles",
    contentId: id as string,
  });
  return {
    props: {
      article: data,
    },
  };
};

const Page: NextPageWithLayout<Props> = ({ article }) => {
  const searchParams = new URLSearchParams();
  searchParams.set("title", article.title);
  searchParams.set("description", article.body);

  const imageUrl = getAbsoluteURL(`/og?${searchParams.toString()}`);
  return (
    <>
      <Head
        ogTitle={article.title}
        ogDescription={article.body}
        ogImageUrl={imageUrl}
      />
      <Detail article={article} />
    </>
  );
};
Page.getLayout = (page: React.ReactElement) => (
  <BaseLayout contentWidth="container.xl">{page}</BaseLayout>
);

export default Page;
