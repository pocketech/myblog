import type { LinkProps } from "next/dist/client/link";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import type { FC, ReactElement } from "react";

type Props = {
  children: (isActive: boolean) => ReactElement;
  /**
   * 渡すhrefの一つが, 他のhrefのサブディレクトリの親になっている場合に, そのhrefを渡す。
   * /contents, /contents/magazine, /contents/event 等
   */
  rootPath?: `/${string}`;
} & LinkProps;

/**
 * パスと連動してアクティブな要素かどうか判断するための振る舞いを与える。
 * 内部でnext/linkが使用されている。
 */
export const ActiveLink: FC<Props> = ({
  children,
  href,
  rootPath,
  ...others
}) => {
  const { asPath, pathname } = useRouter();
  const checkIsActive = (href: LinkProps["href"]): boolean => {
    if (typeof href === "string")
      return rootPath && href === rootPath
        ? href === asPath
        : asPath.startsWith(href);

    return rootPath && href.pathname === rootPath
      ? href.pathname === pathname
      : pathname.startsWith(href.pathname!);
  };

  const isActive = checkIsActive(href);
  return (
    <Link
      href={href}
      scroll={false}
      {...others}
    >
      {children(isActive)}
    </Link>
  );
};
