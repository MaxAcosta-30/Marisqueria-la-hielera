// Caso 4: ¿está abierto hoy? Lógica pura, con pruebas. La hora se toma en Culiacán, no la del visitante.
import type { Dia, Horario } from '../data/negocio';

export const ZONA = 'America/Mazatlan'; // Sinaloa, UTC−7 todo el año (sin horario de verano desde 2022)

export const NOMBRE_DIA = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'] as const;

/** Lunes primero, como se lee un horario en México. */
export const ORDEN_SEMANA: Dia[] = [1, 2, 3, 4, 5, 6, 0];

const aMinutos = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
};

/** "18:00" → "6 p. m."; "09:30" → "9:30 a. m." */
export function horaLegible(hhmm: string): string {
  const [h, m] = hhmm.split(':').map(Number);
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}${m ? `:${String(m).padStart(2, '0')}` : ''} ${h < 12 ? 'a. m.' : 'p. m.'}`;
}

/** Día y minuto actuales en Culiacán. */
export function ahoraEnCuliacan(fecha = new Date()): { dia: Dia; minuto: number } {
  const partes = new Intl.DateTimeFormat('en-US', {
    timeZone: ZONA, weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(fecha);
  const valor = (t: string) => partes.find((p) => p.type === t)!.value;
  const dia = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(valor('weekday')) as Dia;
  return { dia, minuto: Number(valor('hour')) * 60 + Number(valor('minute')) };
}

export interface Estado {
  abierto: boolean;
  texto: string; // "Abierto · cierra a las 6 p. m."
}

export function estadoHorario(horario: Horario[], dia: Dia, minuto: number): Estado {
  const hoy = horario.find((h) => h.dia === dia);
  if (hoy?.abre && hoy.cierra) {
    const abre = aMinutos(hoy.abre);
    const cierra = aMinutos(hoy.cierra);
    if (minuto >= abre && minuto < cierra) return { abierto: true, texto: `Abierto · cierra a las ${horaLegible(hoy.cierra)}` };
    if (minuto < abre) return { abierto: false, texto: `Cerrado · abre hoy a las ${horaLegible(hoy.abre)}` };
  }
  for (let i = 1; i <= 7; i++) {
    const d = ((dia + i) % 7) as Dia;
    const h = horario.find((x) => x.dia === d);
    if (h?.abre) {
      const cuando = i === 1 ? 'mañana' : `el ${NOMBRE_DIA[d]}`;
      return { abierto: false, texto: `Cerrado · abre ${cuando} a las ${horaLegible(h.abre)}` };
    }
  }
  return { abierto: false, texto: 'Cerrado' };
}
