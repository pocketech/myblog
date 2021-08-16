import { Box, chakra, Flex, Link, useColorModeValue } from '@chakra-ui/react'

import { NextChakraAnchor } from '@/components/NextChakraAnchor'
import { formatDateFromUTC } from '@/libs/dayjs'

import type { Article } from '../types'

type Props = Pick<Article, 'title' | 'summary' | 'publishedAt' | 'revisedAt' | 'category' | 'id'>
export const Summary: React.VFC<Props> = ({
  title,
  summary,
  publishedAt,
  revisedAt,
  category,
  id,
}) => {
  return (
    <Flex
      bg={useColorModeValue('white', 'gray.600')}
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
        bg={useColorModeValue('white', 'gray.800')}
        maxW="2xl"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <chakra.span fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
            公開日: {formatDateFromUTC(publishedAt, 'JpMonthDateTime')} / 更新日:{' '}
            {formatDateFromUTC(revisedAt, 'JpMonthDateTime')}
          </chakra.span>
          <Link
            px={3}
            py={1}
            bg="gray.600"
            color="gray.100"
            fontSize="sm"
            fontWeight="700"
            rounded="md"
            _hover={{ bg: 'gray.500' }}
          >
            {category.name}
          </Link>
        </Flex>

        <Box mt={2}>
          <NextChakraAnchor
            href={`/articles/${id}`}
            fontSize="2xl"
            color={useColorModeValue('gray.700', 'white')}
            fontWeight="700"
            _hover={{
              color: useColorModeValue('gray.600', 'gray.200'),
              textDecor: 'underline',
            }}
          >
            {title}
          </NextChakraAnchor>
          <chakra.p
            mt={2}
            color={useColorModeValue('gray.600', 'gray.300')}
            noOfLines={{ base: 4, md: 3 }}
          >
            {summary}
          </chakra.p>
        </Box>

        <NextChakraAnchor
          color={useColorModeValue('green.600', 'green.400')}
          _hover={{ textDecor: 'underline' }}
          href={`/articles/${id}`}
        >
          Read more
        </NextChakraAnchor>
      </Box>
    </Flex>
  )
}
