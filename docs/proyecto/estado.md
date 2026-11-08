# Estado del proyecto — Muestra "Mariscos La Hielera"

**Fase actual:** 7 — Diseño. Dirección C (La comanda) elegida. Siguiente: fase 8.

## Decisiones
- Negocio ficticio: Mariscos La Hielera, Culiacán. Datos inventados.
- Stack: Astro 7 estático, sin BD/CMS/auth. Hosting: Cloudflare Pages Free.
- Fuente única de datos: `src/data/negocio.ts`.
- En la muestra, el WhatsApp del negocio apunta al del estudio.
- Nivel visual 2 (Expresivo) con elemento firma en el primer viewport.
- Dirección C · La comanda, con su paleta (ver 07-diseno.md). El 3D del hielo no va en el hero.

- Técnica de color: base neutra + un solo acento reservado para lo que se toca (pedir, precio estrella, flotante). Neones (#D0F700, #1EF193, #07FDD2, #FECE00, #F4CD00) solo como relleno con texto oscuro: como texto sobre blanco dan 1.2–1.5:1.
- Prototipo con las 11 paletas, claro/oscuro y hielo 3D (three.js 0.160): https://claude.ai/artifact/Kf7pWN23Gf3hAZfRBx7ruQ (fuente: prototipos/laboratorio-color.html). Sube a nivel visual 3 (Inmersivo); el 3D carga después del contenido y no cuenta para el LCP.

## Pendientes
- [x] Elegir dirección visual y paleta (fase 7): C
- [ ] Nombre del estudio y número de WhatsApp
- [ ] Construir (fase 8), capturas 390/1440, auditoría
- [ ] Desplegar y anotar link
