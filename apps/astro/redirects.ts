import type { ValidRedirectStatus } from "astro";
import sanityFetch from "./src/utils/sanity.fetch";

const data = await sanityFetch<{
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

export const redirects = Object.fromEntries(
  data.map(({ source, destination, isPermanent }) => [
    source,
    {
      status: (isPermanent ? 301 : 302) as ValidRedirectStatus,
      destination: destination
    }
  ])
);
