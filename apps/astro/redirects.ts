import type { ValidRedirectStatus } from "astro";
import { isPreviewDeployment } from "./src/utils/is-preview-deployment";

let redirects = {};
if (!isPreviewDeployment) {
  const sanityFetch = await import("./src/utils/sanity.fetch");
  const data = await sanityFetch.default<{
    source: string;
    destination: string;
    isPermanent: boolean;
  }[]>({
    query: `
      *[_type == "redirects"][0].redirects {
        "source": source.current,
        "destination": destination.current,
        isPermanent,
      }[]
    `
  });
  redirects = Object.fromEntries(
    data.map(({ source, destination, isPermanent }) => [
      source,
      {
        status: (isPermanent ? 301 : 302) as ValidRedirectStatus,
        destination: destination
      }
    ])
  );
} else {
  console.warn("🔀 Redirects are disabled in preview deployments");
}

export default redirects;
