import { createClient, type QueryParams } from '@sanity/client'
import { isPreviewDeployment } from '../utils/is-preview-deployment';

const TOKEN = import.meta.env.SANITY_API_TOKEN || process.env.SANITY_API_TOKEN;

if (isPreviewDeployment && !TOKEN) {
  throw new Error("The `SANITY_API_TOKEN` environment variable is required.");
}

export const client = createClient({
  projectId: 'iu4zjh9q',
  dataset: 'production',
  apiVersion: '2024-08-30',
  useCdn: false,
  perspective: isPreviewDeployment ? 'previewDrafts' : 'published',
  ...(isPreviewDeployment && { token: TOKEN }),
})

export default async function sanityFetch<QueryResponse>({
  query,
  params = {},
}: {
  query: string;
  params?: QueryParams;
}): Promise<QueryResponse> {
  return await client.fetch<QueryResponse>(query, params);
}
