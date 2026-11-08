# Estado del proyecto — Muestra "Mariscos La Hielera"

**Fase actual:** 8 — Construcción. Casos 1 y 2 listos (rama `fase-8/casos-1-2`). Siguiente: caso 6 (flotante que lleva la comanda en móvil).

## Decisiones
- Negocio ficticio: Mariscos La Hielera, Culiacán. Datos inventados.
- Stack: Astro 7 estático, sin BD/CMS/auth. Hosting: Cloudflare Pages Free.
- Fuente única de datos: `src/data/negocio.ts`.
- En la muestra, el WhatsApp del negocio apunta al del estudio.
- Nivel visual 2 (Expresivo) con elemento firma en el primer viewport.
- Dirección C · La comanda, con su paleta (ver 07-diseno.md). El 3D del hielo no va en el hero.

- Técnica de color: base neutra + un solo acento reservado para lo que se toca (pedir, precio estrella, flotante). Neones (#D0F700, #1EF193, #07FDD2, #FECE00, #F4CD00) solo como relleno con texto oscuro: como texto sobre blanco dan 1.2–1.5:1.
- Prototipo con las 11 paletas, claro/oscuro y hielo 3D (three.js 0.160): https://claude.ai/artifact/Kf7pWN23Gf3hAZfRBx7ruQ (fuente: prototipos/laboratorio-color.html). Sube a nivel visual 3 (Inmersivo); el 3D carga después del contenido y no cuenta para el LCP.

- Fase 8 base: Astro 7.4.7 + Fontsource (Bricolage variable `standard` con wdth 75–100, Martian Mono 400/500). Tokens en `src/styles/global.css`, un solo tema (la identidad es el azul de hielera; no hay modo claro). `src/lib/whatsapp.ts` arma `wa.me` y la comanda, con 3 pruebas (`npm test`). CSP en `public/_headers`. `noindex` mientras `negocio.demo` sea true.

- Casos 1–2: el botón de pedir vive al pie de la comanda (un solo CTA en el hero, no dos). Sin JS manda el saludo genérico; con JS, la comanda arma el mensaje. Los +/− leen los datos del DOM (sin scripts en línea por la CSP; `assetsInlineLimit: 0`). En ≥64rem la comanda queda pegada a la derecha mientras bajas el menú.
- En móvil la comanda queda arriba; al bajar al menú no se ve: lo resuelve el flotante del caso 6.
- Capturas con playwright-core de Taskflow-pro + Chromium 1248 en caché (no se agregó dependencia). `astro check`: 2 errores previos en `tests/` por falta de `@types/node`.

## Pendientes
- [x] Elegir dirección visual y paleta (fase 7): C
- [ ] Nombre del estudio y número de WhatsApp
- [x] Base de fase 8 (estructura, tokens, datos, layout)
- [x] Casos 1 y 2, con capturas 390/1440
- [ ] Casos 3–7, auditoría (axe, impeccable), revisión independiente
- [ ] Desplegar y anotar link
