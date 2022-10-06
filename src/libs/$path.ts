export const pagesPath = {
  $404: {
    $url: (url?: { hash?: string }) => ({
      pathname: "/404" as const,
      hash: url?.hash,
    }),
  },
  about: {
    $url: (url?: { hash?: string }) => ({
      pathname: "/about" as const,
      hash: url?.hash,
    }),
  },
  articles: {
    _id: (id: string | number) => ({
      ogp: {
        $url: (url?: { hash?: string }) => ({
          pathname: "/articles/[id]/ogp" as const,
          query: { id },
          hash: url?.hash,
        }),
      },
      $url: (url?: { hash?: string }) => ({
        pathname: "/articles/[id]" as const,
        query: { id },
        hash: url?.hash,
      }),
    }),
  },
  contact: {
    $url: (url?: { hash?: string }) => ({
      pathname: "/contact" as const,
      hash: url?.hash,
    }),
  },
  works: {
    $url: (url?: { hash?: string }) => ({
      pathname: "/works" as const,
      hash: url?.hash,
    }),
  },
  $url: (url?: { hash?: string }) => ({
    pathname: "/" as const,
    hash: url?.hash,
  }),
};

export type PagesPath = typeof pagesPath;
