import { test, expect } from '@playwright/test';

const mensaje = (href: string | null) => decodeURIComponent(new URL(href!).searchParams.get('text') ?? '');

test.beforeEach(async ({ page }) => {
  // El mapa de Google no se descarga en las pruebas: solo se comprueba que la fachada crea el iframe.
  await page.route(/google\.com/, (r) => r.abort());
});

test('armar la comanda y mandarla por WhatsApp con el pedido escrito', async ({ page }) => {
  await page.goto('/');
  const pedir = page.locator('[data-pedir]');
  await expect(pedir).toHaveText('Pedir por WhatsApp');
  expect(mensaje(await pedir.getAttribute('href'))).toBe('Hola, La Hielera. Quiero hacer un pedido.');

  await page.getByRole('button', { name: 'Agregar Aguachile verde' }).click();
  await page.getByRole('button', { name: 'Agregar Campechana' }).click();
  await page.getByRole('button', { name: 'Agregar Campechana' }).click();
  await page.getByRole('button', { name: 'Agregar Tostada de ceviche' }).click();
  await page.getByRole('button', { name: 'Quitar Tostada de ceviche' }).click();

  await expect(pedir).toHaveText('Mandar comanda · $627');
  expect(mensaje(await pedir.getAttribute('href'))).toBe(
    'Hola, La Hielera. Mi pedido:\n1 × Aguachile verde — $189\n2 × Campechana — $438\nTotal: $627',
  );
  await expect(page.locator('[data-renglones] li')).toHaveCount(2);
  await expect(page.locator('[data-aviso]')).toHaveText('Tostada de ceviche: 0 en la comanda.');
});

test('la sugerencia de la casa se agrega desde el ticket', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Agregar a la comanda' }).click();
  await expect(page.locator('[data-renglones] li')).toHaveText(/Aguachile verde/);
  await expect(page.locator('[data-platillo="aguachile-verde"]')).toHaveAttribute('data-cantidad', '1');
});

test('con teclado se puede agregar un platillo', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Agregar Refresco' }).focus();
  await page.keyboard.press('Enter');
  await page.keyboard.press('Space');
  await expect(page.locator('[data-pedir]')).toHaveText('Mandar comanda · $60');
});

test('celular: la barra flotante resume el pedido y lleva a la comanda', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'En escritorio la comanda va pegada a la vista; no hay barra');
  await page.goto('/');
  const barra = page.locator('[data-flotante]');
  await expect(barra.getByRole('link', { name: 'Pedir', exact: true })).toBeVisible();
  await expect(page.locator('[data-flotante-resumen]')).toHaveText('Comanda vacía');

  await page.getByRole('button', { name: 'Agregar Aguachile negro' }).click();
  await page.getByRole('button', { name: 'Agregar Agua fresca' }).click();
  await expect(page.locator('[data-flotante-resumen]')).toHaveText('2 platillos · $244');
  const mandar = barra.getByRole('link', { name: 'Mandar' });
  expect(await mandar.getAttribute('href')).toBe(await page.locator('[data-pedir]').getAttribute('href'));

  await barra.getByRole('link', { name: /Ver comanda/ }).click();
  await expect(page.locator('[data-pedir]')).toBeInViewport();
  await expect(barra).toHaveClass(/oculta/);
});

test('el horario usa la hora de Culiacán: lunes de descanso', async ({ page }) => {
  // Lunes 9 nov 2026, 12:00 en Culiacán (UTC−7)
  await page.clock.setFixedTime(new Date('2026-11-09T19:00:00Z'));
  await page.goto('/');
  await expect(page.locator('[data-estado]')).toHaveText('Cerrado · abre mañana a las 10 a. m.');
  await expect(page.locator('li.es-hoy')).toContainText('lunes');
  await expect(page.locator('li[aria-current="date"]')).toHaveCount(1);
});

test('el horario dice abierto dentro del horario', async ({ page }) => {
  // Viernes 13 nov 2026, 18:30 en Culiacán: el viernes cierra a las 7
  await page.clock.setFixedTime(new Date('2026-11-14T01:30:00Z'));
  await page.goto('/');
  await expect(page.locator('[data-estado]')).toHaveText('Abierto · cierra a las 7 p. m.');
});

test('el mapa de Google solo se carga al tocarlo', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('[data-mapa] iframe')).toHaveCount(0);
  await page.getByRole('link', { name: 'Ver el mapa aquí' }).click();
  await expect(page.locator('[data-mapa] iframe')).toHaveAttribute('src', /google\.com\/maps.*output=embed/);
});

test.describe('sin JavaScript', () => {
  test.use({ javaScriptEnabled: false });
  test('el botón de pedir sigue funcionando con el saludo', async ({ page }) => {
    await page.goto('/');
    expect(mensaje(await page.locator('[data-pedir]').getAttribute('href'))).toBe('Hola, La Hielera. Quiero hacer un pedido.');
  });
});
