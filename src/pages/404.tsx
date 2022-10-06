import { Box, chakra, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";

import { Logo } from "@/components/Logo";
import { NextChakraAnchor } from "@/components/NextChakraAnchor";

const Page: NextPage = () => {
  return (
    <Flex
      direction="column"
      minH="100vh"
      pt="16"
      pb="12"
      bg="white"
    >
      <Flex
        as="main"
        direction="column"
        justify="center"
        maxW="7xl"
        w="full"
        mx="auto"
        px={{ base: 4, sm: 6, lg: 8 }}
        grow={1}
      >
        <Flex
          shrink={0}
          justify="center"
        >
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </Flex>
        <Box py="16">
          <Box textAlign="center">
            <chakra.p
              fontSize="sm"
              fontWeight="semibold"
              color="blue.600"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              404 error
            </chakra.p>
            <chakra.h1
              mt="2"
              fontSize={{ base: "4xl", sm: "5xl" }}
              fontWeight="extrabold"
              color="gray.900"
              letterSpacing="tight"
            >
              Page not found.
            </chakra.h1>
            <chakra.p
              mt="2"
              color="gray.500"
            >
              Sorry, we couldn’t find the page you’re looking for.
            </chakra.p>
            <Box mt="6">
              <NextChakraAnchor
                href="/"
                fontSize="medium"
                fontWeight="bold"
                color="blue.600"
                _hover={{ color: "blue.500" }}
              >
                Go back home<span aria-hidden="true"> &rarr;</span>
              </NextChakraAnchor>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};
export default Page;
