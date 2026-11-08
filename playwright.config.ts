import { defineConfig, devices } from '@playwright/test';

// e2e solo de los flujos que no pueden fallar: armar y mandar la comanda, horario y mapa.
export default defineConfig({
  testDir: 'e2e',
  fullyParallel: true,
  reporter: 'list',
  use: { baseURL: 'http://localhost:4329' },
  webServer: {
    // Astro 7 admite un solo preview a la vez: se reusa si ya corre. `npm run test:e2e` compila antes,
    // y el preview sirve dist/ desde disco, así que siempre se prueba la build recién hecha.
    command: 'npx astro preview --port 4329',
    url: 'http://localhost:4329',
    reuseExistingServer: true,
    timeout: 120_000,
  },
  projects: [
    { name: 'celular', use: { ...devices['Pixel 7'], viewport: { width: 390, height: 844 } } },
    { name: 'escritorio', use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } } },
  ],
});
