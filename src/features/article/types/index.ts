export type Article = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  summary: string
  body: string
  category: Category
}

export type Articles = {
  contents: Article[]
  totalCount: number
  offset: number
  limit: number
}

type Category = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
}
