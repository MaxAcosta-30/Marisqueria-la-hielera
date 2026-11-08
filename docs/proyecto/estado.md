# Estado del proyecto — Muestra "Mariscos La Hielera"

**Propósito:** pieza de portafolio (no es un cliente real). **Fase actual:** 8 — Construcción. Los 7 casos Debe están construidos en la rama `fase-8/casos-3-7` (sin fusionar). Siguiente: cierre de calidad y, con autorización, fusionar y publicar.

## Decisiones
- Negocio ficticio: Mariscos La Hielera, Culiacán. Datos inventados; aviso de muestra visible (caso 7).
- Stack: Astro 7 estático, sin BD/CMS/auth. Hosting previsto: Cloudflare Pages Free. Fuente única de datos: `src/data/negocio.ts`.
- Dirección C · La comanda, nivel visual 2. Tokens en `src/styles/global.css`, un solo tema (azul de hielera + papel de ticket).
- Color: base neutra + un acento solo para lo que se toca. Neones solo como relleno con texto oscuro.
- Caso 6: barra flotante en celular (resumen + "Mandar"); se aparta cuando el botón de la comanda está a la vista. Sin JS es el botón de WhatsApp.
- Casos 3 y 4: franja de papel "Dónde y cuándo" a todo lo ancho (rompe el azul continuo). Estado abierto/cerrado calculado en `America/Mazatlan`, no en la hora del visitante (`src/lib/horario.ts`, con pruebas). Mapa con fachada: Google solo carga al tocar.
- Caso 5: fotos de Wikimedia Commons con licencia libre y crédito (ver 05-material.md); `<Picture>` de Astro genera AVIF/WebP. La de la casa en grande; las demás en miniatura. Reseñas: espacio marcado, sin opiniones inventadas.
- Revisión independiente (2026-11-08) aplicada: barra vacía con forma de comanda, mono solo en ticket/datos, sello sobre la foto, títulos de sección unificados, sin sombras duras ni degradado, flecha en SVG. Detalle en 07-diseno.md › Ajustes construidos.
- Franjas a todo lo ancho: `overflow-x: clip` en `html` y `body` (solo en `body` se propaga a la ventana y deja scroll lateral).
- Prototipo de color (11 paletas + hielo 3D): https://claude.ai/artifact/Kf7pWN23Gf3hAZfRBx7ruQ (fuente: prototipos/laboratorio-color.html).

## Verificado (2026-11-08)
- `astro check` 0 errores · `npm test` 10/10 · build OK · sin scroll lateral ni errores de consola a 390 y 1440 px.
- Flujo de pedido probado en navegador: 1 aguachile verde + 2 campechanas → mensaje armado con total $627.
- Horario probado con visitante en otra zona horaria (Europe/Madrid).

## Pendientes
- [x] Casos 1–7
- [ ] Cierre: axe y contraste, detector de impeccable, Lighthouse móvil (LCP < 2.5 s, CLS < 0.1), e2e del pedido, revisión independiente, DESIGN.md
- [ ] Verificar la CSP de `public/_headers` en Cloudflare (el preview local no la aplica): mapa embebido e imágenes
- [ ] Fusionar `fase-8/casos-3-7` y publicar (con autorización)
- [ ] Nombre del estudio (opcional; el aviso funciona sin él)
