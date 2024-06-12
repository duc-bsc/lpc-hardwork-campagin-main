import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    image: {
      domains: ["astro.build"],
        remotePatterns: [{ protocol: "https" }],
      },
      integrations: [
         (await import("astro-compress")).default({
        CSS: false,
        HTML: {
          "html-minifier-terser": {
            removeAttributeQuotes: false
          }
        },
        Image: false,
        JavaScript: false,
        SVG: false
      })]
});
