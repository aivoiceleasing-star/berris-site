import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Static output. build.format 'file' keeps /about.html style URLs (identical to the
// old static site) so nothing breaks: GoDaddy forward, internal links, SEO.
export default defineConfig({
  site: 'https://berriswillsandtrusts.com',
  integrations: [tailwind()],
  build: { format: 'file' },
});
