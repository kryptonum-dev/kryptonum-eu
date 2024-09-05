import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";
import { DOMAIN } from "./src/global/constants";

export default defineConfig({
  site: DOMAIN,
  integrations: [
    sitemap(),
  ],
  image: {
    remotePatterns: [{
      protocol: "https",
      hostname: "cdn.sanity.io"
    }],
  },
  prefetch: {
    prefetchAll: true
  },
  output: 'static',
  adapter: vercel(),
});
