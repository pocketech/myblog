import { useColorModeValue, VisuallyHidden } from '@chakra-ui/react'

import { NextChakraAnchor } from '@/components/NextChakraAnchor'

type Props = {
  icon: React.ReactElement
  label: string
  href: string
}
/**
 * @package
 */
export const IconAnchor: React.VFC<Props> = ({ icon, label, href }) => {
  return (
    <NextChakraAnchor
      href={href}
      display="flex"
      alignItems="center"
      justifyContent="center"
      //
      rounded="full"
      color="inherit"
      transition="background .3s ease"
      //
      _hover={{
        color: useColorModeValue('gray.500', 'gray.400'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {icon}
    </NextChakraAnchor>
  )
}
