import { chakra, Container, Stack } from "@chakra-ui/react";
import type { InferGetStaticPropsType, NextPageWithLayout } from "next";

import type { Articles } from "@/features/article";
import { Summary } from "@/features/article";
import { BaseLayout } from "@/layouts/BaseLayout";
import { client } from "@/libs/client";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const data = await client.get<Articles>({
    endpoint: "articles",
  });
  return {
    props: {
      articles: data.contents,
    },
  };
};

const Page: NextPageWithLayout<Props> = ({ articles }) => {
  return (
    <Container maxW="container.lg">
      <Stack
        spacing={4}
        as="ul"
        listStyleType="none"
      >
        {articles.map((article) => (
          <chakra.li key={article.id}>
            <Summary {...article} />
          </chakra.li>
        ))}
      </Stack>
    </Container>
  );
};
Page.getLayout = (page: React.ReactElement) => <BaseLayout>{page}</BaseLayout>;

export default Page;
