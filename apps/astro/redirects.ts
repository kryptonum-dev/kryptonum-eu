import type { ValidRedirectStatus } from "astro";
import { isPreviewDeployment } from "./src/utils/is-preview-deployment";

type RedirectData = {
  source: string;
  destination: string;
  isPermanent: boolean;
};

let redirects = {};

if (isPreviewDeployment) {
  console.log('\x1b[33m%s\x1b[0m', "🔀 Redirects are disabled in preview deployments");
} else {
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
  redirects = Object.fromEntries(
    data.map(({ source, destination, isPermanent }) => [
      source, {
        status: (isPermanent ? 301 : 302) as ValidRedirectStatus,
        destination
      }
    ])
  );
  console.log('\x1b[32m%s\x1b[0m', `✅ \x1b[1m${Object.keys(redirects).length}\x1b[22m redirects added from Sanity`);
}


export default redirects;
