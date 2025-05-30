import { createClient, type ClientConfig } from '@sanity/client'

export const config: ClientConfig = {
  projectId: 'b50vfou5',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-05-30',
}

export const client = createClient(config)