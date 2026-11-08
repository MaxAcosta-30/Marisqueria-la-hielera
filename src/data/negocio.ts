// Fuente única de datos del sitio. Para un cliente nuevo: clonar y editar solo este archivo.
// MUESTRA: el negocio es inventado (nombre, dirección, teléfono, precios). Las fotos son reales,
// de Wikimedia Commons con licencia libre: se muestran con su crédito.
import type { ImageMetadata } from 'astro';
import fotoAguachileVerde from '../assets/fotos/aguachile-verde.jpg';
import fotoAguachileNegro from '../assets/fotos/aguachile-negro.jpg';

export type Dia = 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = domingo, como Date.getDay()

export interface Platillo {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number; // MXN, entero
  estrella?: boolean;
  /** Foto en src/assets/fotos/ (Astro genera AVIF/WebP). Debe ser ESTE platillo, nunca otro "parecido",
   *  y el alt describe lo que se ve. Con licencia Creative Commons el crédito es obligatorio. */
  foto?: Foto;
}

export interface Foto {
  src: ImageMetadata;
  alt: string;
  credito: {
    autor: string;
    licencia: string; // "CC BY-SA 4.0"
    licenciaUrl: string;
    fuenteUrl: string; // página del archivo en Wikimedia Commons
    cambios?: string; // las licencias CC piden indicar si se modificó: "recortada"
  };
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

// Tipados aparte: con `satisfies` dentro del `as const`, TS estrechaba el tipo y `foto` dejaba de existir.
const horario: Horario[] = [
  { dia: 0, abre: '10:00', cierra: '18:00' },
  { dia: 1, abre: null, cierra: null },
  { dia: 2, abre: '10:00', cierra: '18:00' },
  { dia: 3, abre: '10:00', cierra: '18:00' },
  { dia: 4, abre: '10:00', cierra: '18:00' },
  { dia: 5, abre: '10:00', cierra: '19:00' },
  { dia: 6, abre: '09:00', cierra: '19:00' },
];

const menu: Categoria[] = [
  {
    id: 'aguachiles',
    nombre: 'Aguachiles',
    platillos: [
      { id: 'aguachile-verde', nombre: 'Aguachile verde', descripcion: 'Camarón crudo, chiltepín, limón, pepino y cebolla morada.', precio: 189, estrella: true,
        foto: {
          src: fotoAguachileVerde,
          alt: 'Plato de aguachile verde: camarón en caldo de limón con pepino, cebolla morada y aguacate',
          credito: { autor: 'Photo.MarioVG', licencia: 'CC BY-SA 4.0', licenciaUrl: 'https://creativecommons.org/licenses/by-sa/4.0/deed.es', fuenteUrl: 'https://commons.wikimedia.org/wiki/File:Aguachile_Verde.jpg', cambios: 'recortada' },
        },
      },
      { id: 'aguachile-negro', nombre: 'Aguachile negro', descripcion: 'Camarón con salsa negra, chiltepín tatemado y aguacate.', precio: 209,
        foto: {
          src: fotoAguachileNegro,
          alt: 'Aguachile mixto en salsa negra con pepino, chile y cebolla',
          credito: { autor: 'T.Tseng', licencia: 'CC BY 2.0', licenciaUrl: 'https://creativecommons.org/licenses/by/2.0/deed.es', fuenteUrl: 'https://commons.wikimedia.org/wiki/File:Aguachiles_mixto_en_salsa_negra_(34285755284).jpg', cambios: 'recortada' },
        },
      },
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
];

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
  horario,
  menu,
  // Caso 5: en la muestra no hay reseñas reales; se deja el espacio marcado. Con cliente real: su perfil de Google.
  resenas: { google: null as string | null },
  redes: {
    facebook: null as string | null,
    instagram: null as string | null,
  },
  // Aviso de demostración (caso 7). En un cliente real: demo = false.
  demo: true,
  estudio: {
    nombre: 'PENDIENTE', // PENDIENTE: nombre del estudio (no se muestra en la página mientras no exista)
    whatsapp: '520000000000', // PENDIENTE: número del estudio
  },
} as const;
