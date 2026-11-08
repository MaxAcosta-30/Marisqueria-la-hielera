# Fase 7 — Diseño

## Brief
1. **Para quién:** comensal culichi en el celular, con hambre; quiere ver qué hay, cuánto cuesta y pedir ya.
2. **Sentir en 3 s:** antojo: "se me hizo agua la boca".
3. **Personalidad:** brava (picante, directa, de carreta, sin pretensión).
4. **Debe recordar:** que pedir es un toque y llega por WhatsApp.
5. **Contenido más fuerte:** el aguachile y el pedido por WhatsApp → elemento firma.

Nivel visual: 2 (Expresivo).

## Direcciones
| | A · Rótulo culichi | B · Pizarrón de hoy | C · La comanda |
|---|---|---|---|
| Referencia | Rotulación mexicana de carreta | Pizarrón de mercado | Ticket térmico de cocina |
| Tipos | Bungee Shade / Bungee + Barlow | Cabin Sketch + Atkinson Hyperlegible | Bricolage Grotesque (condensada) + Martian Mono (solo ticket) |
| Paleta | #0E8A8A fondo, #FFFBF2 texto, #E03A2F acento, #FFD23F secundario, #102A2B tinta | #1F3A34 fondo, #F1EFE6 gis, #F5D547 acento, #F29CB0 secundario, #8A5A3B marco | #0B3A53 fondo, #F2F7F5 texto, #8EDB5A acento, #FF5A4E secundario, #FFFFFF papel |
| Primer viewport | Pared turquesa, nombre pintado gigante inclinado, banderola amarilla, etiqueta de precio | Pizarrón a pantalla completa con marco de madera: "Hoy llegó" + fecha + 3 precios | Titular condensado + comanda impresa completa a la derecha (escritorio). En celular: titular y menú primero; la firma llega por la barra flotante (ver «Ajustes construidos») |
| Firma | El rótulo se pinta por capas al cargar | El pizarrón se escribe solo con la fecha de hoy | La comanda se llena al tocar platillos y se manda armada por WhatsApp |
| Movimiento | Pintado en el hero + etiquetas que se balancean | Trazo de gis por renglón | Impresión del ticket + empujón al agregar |

**Elegida:** C · La comanda (2026-11-07). Por qué: su firma (armar el pedido tocando platillos y mandarlo por WhatsApp) es lo que el brief pide recordar y cubre los casos 1, 2 y 6. Por qué no A/B: decoran, pero no ayudan a pedir.

Contraste medido (AA):
- #F2F7F5 sobre #0B3A53 → 11.1 ✓ texto
- #8EDB5A sobre #0B3A53 → 7.1 ✓ (también #0B3A53 sobre #8EDB5A como relleno)
- #FF5A4E sobre #0B3A53 → 3.9 ✗ texto chico: solo relleno o texto grande. Como texto: #FF8A80 sobre fondo (5.3) y #C23328 sobre papel (5.5)
- #0B3A53 sobre papel #FFFFFF → 12.0 ✓ (ticket)

3D del hielo: fuera del hero (nivel visual 2).

## Ajustes construidos (aprobados)
- **Celular (2026-11-07, crítica UI):** la comida va primero; el ticket queda después del menú. Acceso a la firma: barra flotante con la misma forma vacía o llena ("Comanda vacía" / "3 platillos · $627" + Pedir/Mandar).
- **El ticket sale completo** de la ranura de la impresora (animación de impresión), no recortado por el borde.
- **Mono (Martian) solo en lo que es ticket o dato:** ticket, precios, cantidades, resumen de la barra, horario y teléfono sobre la franja de papel. Todo lo demás en Bricolage.
- **"La de la casa"** es un sello estampado sobre la foto del platillo, no un rótulo encima del título.
- **Títulos de sección** (MENÚ, DÓNDE Y CUÁNDO, LO QUE DICEN) en mayúsculas condensadas, mismo tamaño.
- Sin sombras duras desplazadas: la presión se marca con `scale(.97)`. Se queda la paleta de C; el laboratorio de 11 paletas queda como referencia.
