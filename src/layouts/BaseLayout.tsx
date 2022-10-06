import type { LayoutProps } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Global } from "@emotion/react";

import { GUTTER } from "./constants";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { TabBar } from "./Header/components/Tabbar";

type Props = {
  contentWidth?: LayoutProps["maxW"];
  children: React.ReactNode;
};

export const BaseLayout: React.FC<Props> = ({ children, contentWidth }) => {
  return (
    <>
      <Global
        styles={{
          html: {
            height: "100%",
          },
          body: {
            display: "flex",
            flexDirection: "column",
          },
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "#__next": {
            display: "contents",
          },
        }}
      />

      <Header
        position={{ lg: "sticky" }}
        top="0"
        zIndex="sticky"
      />

      <Container
        as="main"
        maxW={contentWidth}
        mt="8"
        flex="1"
        // eslint-disable-next-line @typescript-eslint/naming-convention
        px={{ ...GUTTER, "2xl": 0 }}
        mx="auto"
      >
        {children}
      </Container>
      <Footer />
      <TabBar
        display={{ base: "flex", lg: "none" }}
        position="sticky"
        bottom="0"
        zIndex="sticky"
      />
    </>
  );
};
