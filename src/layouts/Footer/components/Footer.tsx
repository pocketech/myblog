import { chakra, Stack, Text, useColorModeValue } from "@chakra-ui/react";

import { GUTTER } from "@/layouts/constants";

import { SocialIconGroup } from "./SocialIconGroup";

export const Footer: React.FC = () => {
  return (
    <chakra.footer
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.400", "gray.500")}
      py={{ base: 8, lg: 16 }}
      px={GUTTER}
    >
      <Stack
        spacing="4"
        direction={{ base: "column", md: "row-reverse" }}
        justify={{ base: "center", md: "space-between" }}
        align="center"
      >
        <SocialIconGroup />
        <Text>© 2021 Pock-tech Blog. All Rights Reserved.</Text>
      </Stack>
    </chakra.footer>
  );
};
