import type { LinkProps } from 'next/dist/client/link'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import type { ReactElement, VFC } from 'react'

/**
 * パスと連動してアクティブな要素かどうか判断するための振る舞いを与える。
 * 内部でnext/linkとaタグが使用されている。
 * @package
 */
export const ActiveAnchor: VFC<LinkProps & { children: (isActive: boolean) => ReactElement }> = ({
  children,
  href,
  ...others
}) => {
  const router = useRouter()
  const activeRoute = router.pathname
  const isActive = href === activeRoute
  return (
    <Link href={href} scroll={false} {...others}>
      <a>{children(isActive)}</a>
    </Link>
  )
}
