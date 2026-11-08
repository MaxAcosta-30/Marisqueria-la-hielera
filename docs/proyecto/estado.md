# Estado del proyecto — Muestra "Mariscos La Hielera"

**Fase actual:** 8 — Construcción. Base lista (rama `fase-8/base`). Siguiente: caso 2 (menú) + 1 (pedir desde el hero).

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

## Pendientes
- [x] Elegir dirección visual y paleta (fase 7): C
- [ ] Nombre del estudio y número de WhatsApp
- [x] Base de fase 8 (estructura, tokens, datos, layout)
- [ ] Casos 1–7, capturas 390/1440, auditoría
- [ ] Desplegar y anotar link
