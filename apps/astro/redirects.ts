import type { ValidRedirectStatus } from "astro";
import { isPreviewDeployment } from "./src/utils/is-preview-deployment";

type RedirectData = {
  source: string;
  destination: string;
  isPermanent: boolean;
};

const redirects = isPreviewDeployment ? {} : await fetchRedirects();

if (isPreviewDeployment) {
  console.warn('\x1b[33m%s\x1b[0m', "🔀 Redirects are disabled in preview deployments");
}

async function fetchRedirects() {
  const { default: sanityFetch } = await import("./src/utils/sanity.fetch");
  const data = await sanityFetch<RedirectData[]>({
    query: `
      *[_type == "redirects"][0].redirects {
        "source": source.current,
        "destination": destination.current,
        isPermanent,
      }[]
    `
  });
  return Object.fromEntries(
    data.map(({ source, destination, isPermanent }) => [
      source, {
        status: (isPermanent ? 301 : 302) as ValidRedirectStatus,
        destination
      }
    ])
  );
}

export default redirects;
