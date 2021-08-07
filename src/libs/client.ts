import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'pocket',
  apiKey: process.env.API_KEY as string,
})
