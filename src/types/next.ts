import type { NextComponentType, NextPageContext } from 'next'

// NOTE: NextPageの型を拡張
declare module 'next' {
  // eslint-disable-next-line @typescript-eslint/ban-types
  type NextPageWithLayout<P = {}, IP = P> = NextComponentType<NextPageContext, IP, P> & {
    getLayout: (page: JSX.Element) => JSX.Element
  }
}
