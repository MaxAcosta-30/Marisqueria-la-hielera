# Estado del proyecto — Muestra "Mariscos La Hielera"

**Propósito:** pieza de portafolio (no es un cliente real). **Fase actual:** 8 cerrada. Casos 1–7 y cierre de calidad en la rama `fase-8/casos-3-7` (subida a GitHub, sin fusionar). Se queda en local: no se despliega.

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
- [x] Cierre (2026-11-08): axe 0 violaciones (390/1440, vacía y con pedido) · contraste AA medido a mano donde axe no puede · detector de impeccable 0 · Lighthouse móvil 99/100/100 (SEO 63 por `noindex` intencional), LCP 2.1 s, CLS 0.002 · e2e 15/15 (`npm run test:e2e`) · revisión independiente aplicada · DESIGN.md y PRODUCT.md
- [ ] Fusionar `fase-8/casos-3-7` en `main` (con autorización)
- Fuera de alcance por decisión del usuario: despliegue y verificación de la CSP de `public/_headers` (el proyecto se queda en local)
- [ ] Nombre del estudio (opcional; el aviso funciona sin él)
