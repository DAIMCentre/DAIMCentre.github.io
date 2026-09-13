// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Organisation-level GitHub Pages site: https://daimcentre.github.io/
// This is a ROOT domain deployment — do not set `base`.
export default defineConfig({
  site: 'https://daimcentre.github.io',
  trailingSlash: 'ignore',
  output: 'static',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
