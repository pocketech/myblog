import type { PositionProps } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
import { chakra, Flex } from "@chakra-ui/react";
import NextLink from "next/link";

import { Logo } from "@/components/Logo";
import { GUTTER } from "@/layouts/constants";
import { pagesPath } from "@/libs/$path";

import { NavBar } from "./Navbar";
import { SocialIcons } from "./SocialIcons";

type Props = PositionProps;

export const Header: React.FC<Props> = ({ ...positionProps }) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const isLargerThan2xl = useBreakpointValue({ "2xl": true });
  return (
    <chakra.header
      borderBottomWidth="thin"
      bgColor="white"
      px={GUTTER}
      {...positionProps}
    >
      <Flex alignItems="center">
        <Flex
          alignItems="center"
          gridGap="4"
        >
          <NextLink href={pagesPath.$url()}>
            <a>
              <Logo width={{ base: "48", sm: "64" }} />
            </a>
          </NextLink>
          <NavBar
            size={isLargerThan2xl ? "md" : "sm"}
            display={{ base: "none", lg: "initial" }}
            ml={{ lg: "4" }}
          />
        </Flex>
        <SocialIcons ml="auto" />
      </Flex>
    </chakra.header>
  );
};
