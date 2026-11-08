import { test } from 'node:test';
import assert from 'node:assert/strict';
import { enlaceWhatsApp, mensajeComanda } from '../src/lib/whatsapp.ts';

test('enlace limpia el número y codifica el mensaje', () => {
  assert.equal(enlaceWhatsApp('+52 667 000 0000', 'Hola & adiós'), 'https://wa.me/526670000000?text=Hola%20%26%20adi%C3%B3s');
});

test('comanda vacía manda saludo genérico', () => {
  assert.equal(mensajeComanda('La Hielera', []), 'Hola, La Hielera. Quiero hacer un pedido.');
});

test('comanda suma cantidades e ignora renglones en cero', () => {
  const m = mensajeComanda('La Hielera', [
    { nombre: 'Aguachile verde', precio: 189, cantidad: 2 },
    { nombre: 'Refresco', precio: 30, cantidad: 0 },
    { nombre: 'Agua fresca', precio: 35, cantidad: 1 },
  ]);
  assert.match(m, /2 × Aguachile verde — \$378/);
  assert.doesNotMatch(m, /Refresco/);
  assert.match(m, /Total: \$413$/);
});
