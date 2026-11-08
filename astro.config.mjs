import { defineConfig } from 'astro/config';

export default defineConfig({
  // Cambiar por el dominio del cliente al clonar.
  site: 'https://la-hielera.pages.dev',
  build: { inlineStylesheets: 'auto' },
  // La CSP (public/_headers) no admite scripts en línea: todo JS sale a archivo.
  vite: { build: { assetsInlineLimit: 0 } },
});
