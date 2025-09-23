import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'z8upy87y',
  dataset: 'production',
  apiVersion: '2025-09-04',
  useCdn: true,
})

export default client
