import { test } from 'node:test';
import assert from 'node:assert/strict';
import { estadoHorario, horaLegible, ahoraEnCuliacan } from '../src/lib/horario.ts';
import type { Horario } from '../src/data/negocio.ts';

// Mismo patrón que la muestra: lunes cerrado, viernes hasta las 19.
const horario: Horario[] = [
  { dia: 0, abre: '10:00', cierra: '18:00' },
  { dia: 1, abre: null, cierra: null },
  { dia: 2, abre: '10:00', cierra: '18:00' },
  { dia: 3, abre: '10:00', cierra: '18:00' },
  { dia: 4, abre: '10:00', cierra: '18:00' },
  { dia: 5, abre: '10:00', cierra: '19:00' },
  { dia: 6, abre: '09:30', cierra: '19:00' },
];
const h = (hh: number, mm = 0) => hh * 60 + mm;

test('horas legibles en 12 h', () => {
  assert.equal(horaLegible('18:00'), '6 p. m.');
  assert.equal(horaLegible('09:30'), '9:30 a. m.');
  assert.equal(horaLegible('12:00'), '12 p. m.');
  assert.equal(horaLegible('00:15'), '12:15 a. m.');
});

test('abierto dentro del horario', () => {
  assert.deepEqual(estadoHorario(horario, 3, h(13)), { abierto: true, texto: 'Abierto · cierra a las 6 p. m.' });
});

test('a la hora exacta de cierre ya está cerrado', () => {
  assert.equal(estadoHorario(horario, 3, h(18)).abierto, false);
  assert.equal(estadoHorario(horario, 3, h(18)).texto, 'Cerrado · abre mañana a las 10 a. m.');
});

test('antes de abrir, abre hoy', () => {
  assert.equal(estadoHorario(horario, 6, h(8)).texto, 'Cerrado · abre hoy a las 9:30 a. m.');
});

test('domingo en la noche salta el lunes cerrado', () => {
  assert.equal(estadoHorario(horario, 0, h(20)).texto, 'Cerrado · abre el martes a las 10 a. m.');
});

test('el lunes de descanso abre mañana', () => {
  assert.equal(estadoHorario(horario, 1, h(12)).texto, 'Cerrado · abre mañana a las 10 a. m.');
});

test('la hora se toma en Culiacán (UTC−7), no la del visitante', () => {
  // 2026-11-08 03:00 UTC = sábado 7 nov, 20:00 en Culiacán
  assert.deepEqual(ahoraEnCuliacan(new Date('2026-11-08T03:00:00Z')), { dia: 6, minuto: h(20) });
});
