# DESIGN.md — Mariscos La Hielera · "La comanda"

Escrito a partir de lo construido (rama `fase-8/casos-3-7`), no de las intenciones. Si el código y este documento difieren, manda el código y se corrige aquí.

## Mundo

Una marisquería de carreta en Culiacán vista como **la comanda de cocina**: ticket térmico blanco que sale de una impresora sobre el azul de la hielera. El elemento firma es la comanda que se llena al tocar platillos y se manda armada por WhatsApp. Todo lo demás (franja de papel de "Dónde y cuándo", renglones con puntos, mono en cifras) sale de ese mismo papel.

- **Modo:** Persuadir con alma de Operar. El visitante quiere ver qué hay, cuánto cuesta y pedir; la marca vive en el ticket y en el titular.
- **Personalidad:** brava. Directa, picante, sin pretensión.
- **Nivel visual:** 2 (Expresivo). Sin 3D en la página (el hielo 3D quedó en el prototipo de color).

## Tokens (`src/styles/global.css`)

### Color
Un solo tema. Base de dos tonos de azul + papel; un acento verde reservado para lo que se toca.

| Token | Valor | Uso | Contraste medido |
|---|---|---|---|
| `--c-fondo` | `#0b3a53` | Fondo general (azul hielera) | — |
| `--c-fondo-hondo` | `#072a3d` | Ranura de impresora, barra flotante, franja de aviso | — |
| `--c-texto` | `#f2f7f5` | Texto sobre azul | 11.1:1 / 13.8:1 sobre hondo |
| `--c-texto-suave` | `#b9ccd3` | Descripciones, notas | 7.3:1 / 9.0:1 sobre hondo |
| `--c-acento` | `#8edb5a` | Solo lo que se toca: pedir, "+" con pedido, precio estrella, Mandar, estado abierto | 7.1:1 sobre fondo; tinta sobre acento 7.1:1 |
| `--c-picante` | `#ff5a4e` | "PICA" del titular (texto grande) | 3.9:1, solo texto grande o relleno |
| `--c-picante-texto` | `#ff8a80` | Relleno del sello "La de la casa" con tinta encima | tinta encima 5.3:1 |
| `--c-papel` | `#ffffff` | Ticket y franja de "Dónde y cuándo" | — |
| `--c-tinta` | `#0b3a53` | Texto sobre papel | 12.0:1 |
| `--c-tinta-picante` | `#c23328` | Rótulo "Sugerencia de la casa", pin del mapa, punto de cerrado | 5.5:1 sobre papel |
| `--c-foco` | `#8edb5a` | Anillo de foco (sobre papel se usa tinta) | — |

Reglas:
- El acento nunca decora: si todo brilla, nada destaca. El "+" va en contorno y se rellena cuando el platillo ya está en la comanda.
- El estado nunca solo por color: "Abierto · cierra a las 6 p. m." es texto; "HOY" es una etiqueta.
- Sobre papel, el foco y los bordes usan tinta.

### Tipografía
- **Display y texto:** Bricolage Grotesque Variable (Fontsource, eje `wdth` 75–100). Titulares en `font-stretch: 75%`, peso 800, mayúsculas en h1 y en "Dónde y cuándo", tracking negativo (−0.02 a −0.035em).
- **Mono:** Martian Mono 400/500, solo en el ticket, precios, horario, notas y créditos. Siempre `tabular-nums` en cifras.
- **Escala:** `--t-xs` 13 px · `--t-s` 15 · `--t-m` 17 · `--t-l` 22–28 · `--t-xl` 36–60 · `--t-xxl` 56–120 (h1, 6.6:1 sobre el cuerpo en 390 px). Mínimo absoluto: 12 px (rótulos mono, notas).
- Mayúsculas con tracking amplio solo en rótulos cortos (`COMANDA`, `HORARIO`, `HOY`, sello).

### Espacio, radios y movimiento
- Espaciado: `--e-1` 4 px · `--e-2` 8 · `--e-3` 16 · `--e-4` 24 · `--e-5` 40 · `--e-6` 64 · `--e-7` 96. Gutter 16 px (32 px desde 768 px). Ancho máximo 72 rem.
- Radios: `--r-s` 6 px (botones, renglón de hoy, miniatura) · `--r-m` 12 px (foto grande, barra flotante, mapa, espacio de reseñas) · 999 px (chips de categoría, estado).
- Curvas: `--ease-salida` `cubic-bezier(0.23,1,0.32,1)` para interfaz; `--ease-marca` `cubic-bezier(0.16,1,0.3,1)` para la impresión del ticket. Sin rebote.
- Duraciones: `--d-ui` 180 ms; `--d-marca` 440 ms; impresión del ticket 1100 ms (una vez, al cargar).
- `prefers-reduced-motion`: todo queda quieto.

## Componentes

| Componente | Archivo | Notas |
|---|---|---|
| Aviso de muestra | `Aviso.astro` | Franja a todo lo ancho en `--c-fondo-hondo`, mono 12 px. Solo con `negocio.demo`. |
| Hero | `pages/index.astro` | Titular condensado gigante con "PICA" en picante. Un solo enlace secundario ("Ver el menú"); el CTA vive en la comanda. |
| Comanda (firma) | `Comanda.astro` | Ticket con ranura de impresora, corte dentado (mask cónica), renglones mono. Vacía muestra la sugerencia de la casa, nunca "$0". En ≥ 1024 px va pegada a la derecha mientras bajas el menú. |
| Barra flotante | `Comanda.astro` (`.flotante`) | Solo < 1024 px. Vacía: "Pedir por WhatsApp". Con pedido: resumen mono + "Ver comanda" + "Mandar". Se aparta cuando el botón de la comanda está a la vista. |
| Menú | `Menu.astro` | Categorías en chips (fila deslizable en celular). Renglón: nombre, precio mono a la derecha, descripción, control −/cantidad/+ de 44 px. "La de la casa": foto grande 3:2, sello girado −2°, precio en acento. Otros platillos con foto: miniatura cuadrada a la izquierda. |
| Dónde y cuándo | `Lugar.astro` | Franja de papel a todo lo ancho con dientes arriba y abajo: rompe el azul. Horario con renglones punteados; hoy en negativo con "HOY". Estado en píldora. Mapa con fachada (borde punteado + pin); Google carga al tocar. |
| Reseñas | `Resenas.astro` | Espacio punteado con estrellas en contorno (no hay calificación que mostrar): "Aquí van las reseñas de Google del negocio". |
| Pie | `Pie.astro` | Nombre, dirección, créditos de las fotos (obligatorios por licencia CC), año. |

### Botones
- **Primario (acento):** "Pedir por WhatsApp", "Mandar comanda · $X", "Mandar". Relleno acento, texto tinta, sombra dura de tinta en el ticket.
- **Secundario sobre papel:** "Cómo llegar" (relleno tinta), "Ver el mapa aquí" y "Agregar a la comanda" (contorno tinta).
- **Control de cantidad:** círculos de 44 px; "+" en contorno acento → relleno cuando hay cantidad; "−" en blanco translúcido.
- Hover solo con puntero fino; `:active` baja 2–3 px.

## Imágenes
- En `src/assets/fotos/`, procesadas por `<Picture>` de Astro a AVIF y WebP. La de la casa con `fetchpriority="high"` (es el LCP en celular); miniaturas diferidas.
- Proporción 3:2; miniaturas recortadas a 1:1 con `object-fit`.
- Contorno interior de 1 px blanco al 8 % para despegar la foto del azul.
- Cada foto lleva crédito de autor, licencia y cambios ("recortada").

## Lo que no se hace aquí
- Nada de gradientes, glassmorphism, tarjetas con sombra suave ni íconos en cuadritos.
- Nada de opiniones, métricas o fotos inventadas.
- Nada de otro color de acento para "llamar la atención": el picante es solo del titular y del sello.
