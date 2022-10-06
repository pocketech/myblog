import {
  Box,
  chakra,
  Flex,
  Image,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

import { NextChakraAnchor } from "@/components/NextChakraAnchor";
import { formatDateFromUTC } from "@/libs/dayjs";

import type { Article } from "../types";

type Props = Pick<
  Article,
  "title" | "summary" | "publishedAt" | "revisedAt" | "category" | "id"
>;
export const Summary: React.FC<Props> = ({
  title,
  summary,
  publishedAt,
  revisedAt,
  category,
  id,
}) => {
  return (
    <Flex
      bg={useColorModeValue("white", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        px={8}
        py={4}
        rounded="lg"
        shadow="lg"
        bg={useColorModeValue("white", "gray.800")}
        maxW="2xl"
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
        >
          <chakra.span
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            公開日: {formatDateFromUTC(publishedAt, "JpMonthDateTime")} 更新日:{" "}
            {formatDateFromUTC(revisedAt, "JpMonthDateTime")}
          </chakra.span>
          <Link
            px={3}
            py={1}
            bg="gray.600"
            color="gray.100"
            fontSize="sm"
            fontWeight="700"
            rounded="md"
            _hover={{ bg: "gray.500" }}
          >
            {category.name}
          </Link>
        </Flex>

        <Box mt={2}>
          <NextChakraAnchor
            href={`/articles/${id}`}
            fontSize="2xl"
            color={useColorModeValue("gray.700", "white")}
            fontWeight="700"
            _hover={{
              color: useColorModeValue("gray.600", "gray.200"),
              textDecor: "underline",
            }}
          >
            {title}
          </NextChakraAnchor>
          <chakra.p
            mt={2}
            color={useColorModeValue("gray.600", "gray.300")}
          >
            {summary}
          </chakra.p>
        </Box>

        <Flex
          justifyContent="space-between"
          alignItems="center"
          mt={4}
        >
          <Link
            color={useColorModeValue("brand.600", "brand.400")}
            _hover={{ textDecor: "underline" }}
          >
            Read more
          </Link>

          <Flex alignItems="center">
            <Image
              mx={4}
              w={10}
              h={10}
              rounded="full"
              fit="cover"
              display={{ base: "none", sm: "block" }}
              src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
              alt="avatar"
            />
            <Link
              color={useColorModeValue("gray.700", "gray.200")}
              fontWeight="700"
              cursor="pointer"
            >
              Khatab wedaa
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
