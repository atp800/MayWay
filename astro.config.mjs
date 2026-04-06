import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  // Add this i18n section!
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl'],
    routing: {
      prefixDefaultLocale: false, // "false" means default (currently English) URLs don't need /en/
      redirectToDefaultLocale: true // If they visit "/", send them to English
    }
  }
});