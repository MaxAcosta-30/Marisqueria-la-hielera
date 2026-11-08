# Fase 3 — Alcance

**Actor:** comensal (anónimo). No hay administrador: el estudio edita `src/data/negocio.ts`.

| # | Caso | Prioridad | Criterio de aceptación |
|---|---|---|---|
| 1 | Como comensal quiero pedir por WhatsApp desde el hero | Debe | Botón abre `wa.me` con mensaje prellenado |
| 2 | Quiero ver el menú por categoría con precios en MXN | Debe | Legible a 390 px sin zoom; precios `$000` alineados |
| 3 | Quiero ver dónde está y cómo llegar | Debe | Mapa embebido + botón a Google Maps |
| 4 | Quiero saber si está abierto hoy | Debe | Horario visible; día actual resaltado |
| 5 | Quiero confianza (fotos y opiniones) | Debe | Fotos reales de platillos con licencia libre y su crédito; espacio marcado para las reseñas de Google (sin opiniones inventadas) |
| 6 | Quiero pedir desde cualquier parte | Debe | Botón flotante de WhatsApp siempre visible |
| 7 | Como prospecto quiero saber quién hizo el sitio | Debe | Aviso de demostración + botón al WhatsApp del estudio (sin nombre de estudio hasta que exista) |

**Exclusiones:** pagos en línea, carrito con cobro, reservaciones, CMS, cuentas, inglés.
**No funcionales:** móvil primero; LCP < 2.5 s y CLS < 0.1 en celular; AA, foco visible, `prefers-reduced-motion`; español de México.
