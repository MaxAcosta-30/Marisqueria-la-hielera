// Fuente única de datos del sitio. Para un cliente nuevo: clonar y editar solo este archivo.
// MUESTRA: todo es inventado (nombre, dirección, teléfono, testimonios).

export type Dia = 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = domingo, como Date.getDay()

export interface Platillo {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number; // MXN, entero
  estrella?: boolean;
  /** Foto del platillo en public/fotos/ (WebP, ~1200 px de ancho). Debe ser ESTE platillo:
   *  nunca una foto de otro con este nombre. Con licencia de stock, anotar el crédito si la licencia lo pide. */
  foto?: { src: string; alt: string; credito?: string };
}

export interface Categoria {
  id: string;
  nombre: string;
  platillos: Platillo[];
}

export interface Horario {
  dia: Dia;
  abre: string | null; // "HH:MM" 24 h; null = cerrado
  cierra: string | null;
}

export interface Testimonio {
  nombre: string;
  texto: string;
  demo: boolean; // true = inventado para la muestra; se muestra marcado
}

export const negocio = {
  nombre: 'Mariscos La Hielera',
  nombreCorto: 'La Hielera',
  lema: 'Aguachile que pica de verdad.',
  ciudad: 'Culiacán, Sinaloa',
  direccion: 'Blvd. Ejemplo 123, Col. Centro, Culiacán, Sin.',
  // Número en formato internacional sin "+" ni espacios (wa.me lo exige).
  // MUESTRA: apunta al WhatsApp del estudio. PENDIENTE: número real.
  whatsapp: '520000000000',
  telefonoVisible: '667 000 0000',
  mapa: {
    // Zona genérica de Culiacán, para no señalar un negocio real.
    consulta: 'Culiacán, Sinaloa',
    lat: 24.8091,
    lng: -107.394,
  },
  horario: [
    { dia: 0, abre: '10:00', cierra: '18:00' },
    { dia: 1, abre: null, cierra: null },
    { dia: 2, abre: '10:00', cierra: '18:00' },
    { dia: 3, abre: '10:00', cierra: '18:00' },
    { dia: 4, abre: '10:00', cierra: '18:00' },
    { dia: 5, abre: '10:00', cierra: '19:00' },
    { dia: 6, abre: '09:00', cierra: '19:00' },
  ] satisfies Horario[],
  menu: [
    {
      id: 'aguachiles',
      nombre: 'Aguachiles',
      platillos: [
        { id: 'aguachile-verde', nombre: 'Aguachile verde', descripcion: 'Camarón crudo, chiltepín, limón, pepino y cebolla morada.', precio: 189, estrella: true },
        { id: 'aguachile-negro', nombre: 'Aguachile negro', descripcion: 'Camarón con salsa negra, chiltepín tatemado y aguacate.', precio: 209 },
        { id: 'aguachile-rojo', nombre: 'Aguachile rojo', descripcion: 'Camarón, chile de árbol, limón y pepino.', precio: 199 },
      ],
    },
    {
      id: 'cocteles',
      nombre: 'Cócteles',
      platillos: [
        { id: 'coctel-camaron', nombre: 'Cóctel de camarón', descripcion: 'Camarón cocido, salsa de la casa, aguacate y galletas.', precio: 159 },
        { id: 'campechana', nombre: 'Campechana', descripcion: 'Camarón, pulpo y callo en su jugo.', precio: 219 },
      ],
    },
    {
      id: 'tostadas',
      nombre: 'Tostadas',
      platillos: [
        { id: 'tostada-ceviche', nombre: 'Tostada de ceviche', descripcion: 'Ceviche de pescado con zanahoria y cilantro.', precio: 55 },
        { id: 'tostada-callo', nombre: 'Tostada de callo', descripcion: 'Callo de hacha, pepino, cebolla y salsa negra.', precio: 119 },
      ],
    },
    {
      id: 'bebidas',
      nombre: 'Bebidas',
      platillos: [
        { id: 'agua-fresca', nombre: 'Agua fresca', descripcion: 'Jamaica u horchata, de medio litro.', precio: 35 },
        { id: 'refresco', nombre: 'Refresco', descripcion: 'De vidrio, 355 ml.', precio: 30 },
      ],
    },
  ] satisfies Categoria[],
  testimonios: [
    { nombre: 'Cliente de muestra', texto: 'El aguachile negro está bravo, como debe ser.', demo: true },
    { nombre: 'Cliente de muestra', texto: 'Pedí por WhatsApp y en 20 minutos ya estaba en la mesa.', demo: true },
  ] satisfies Testimonio[],
  redes: {
    facebook: null as string | null,
    instagram: null as string | null,
  },
  // Aviso de demostración (caso 7). En un cliente real: demo = false.
  demo: true,
  estudio: {
    nombre: 'PENDIENTE', // PENDIENTE: nombre del estudio
    whatsapp: '520000000000', // PENDIENTE: número del estudio
  },
} as const;
