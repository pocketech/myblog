import type { LinkProps } from 'next/dist/client/link'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import type { ReactElement, VFC } from 'react'

/**
 * パスと連動してアクティブな要素かどうか判断するための振る舞いを与える。
 * 内部でnext/linkが使用されている。
 */
export const ActiveLink: VFC<LinkProps & { children: (isActive: boolean) => ReactElement }> = ({
  children,
  href,
  ...others
}) => {
  const router = useRouter()
  const activeRoute = router.asPath
  const ROOT_PATH = '/'
  // NOTE: ' / 'のときのみ判定ロジックを完全一致にしている。
  const isActive =
    href === ROOT_PATH ? href === activeRoute : activeRoute.startsWith(href.toString())
  return (
    <Link href={href} scroll={false} {...others}>
      {children(isActive)}
    </Link>
  )
}
