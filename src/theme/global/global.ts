import type { CSSObject } from '@chakra-ui/react'
import type { GlobalStyleProps } from '@chakra-ui/theme-tools'

// propsはカラーモードでスタイルを変えたいときに使用する。
export const global = (_props: GlobalStyleProps): CSSObject => {
  return {
    body: {
      textColor: 'gray.900',
    },
  }
}
