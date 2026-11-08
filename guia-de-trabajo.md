# Guía de trabajo: cómo pienso, cómo resolvemos y cómo diseño

Resumen de las reglas y el método que seguí en Hito, el portafolio y los repositorios. Salen de tu `CLAUDE.md`, de las skills que instalaste (`impeccable`, `dataviz`, `direccion-creativa-ui`, `make-interfaces-feel-better`, GSAP) y de lo que me fuiste corrigiendo. Sirve como instrucciones para cualquier proyecto nuevo.

---

## 1. Cómo pienso antes de actuar

1. **Primero entender, luego tocar.** Leo el código, las capturas y los documentos antes de cambiar algo. Si hay dudas, mido o reproduzco; no supongo.
2. **Ver lo que existe de verdad.** Antes de rediseñar, capturo la pantalla actual a 1440 px y a 390 px, en claro y en oscuro. Muchas veces ahí aparecen errores reales; en TaskFlow, el tablero no cargaba y el login inventaba métricas.
3. **Una decisión, una línea de por qué.** Cada decisión importante lleva por qué se toma y por qué no la otra opción. Ejemplo: "3D por CSS y no WebGL para las capturas: el texto se ve nítido y no suma otro lienzo".
4. **Recomendar, no presentar menús infinitos.** Si hay que elegir, propongo 2 o 3 opciones con una recomendada. Si la decisión es tuya (marca, dinero, publicar), pregunto. Si no, decido y lo digo.
5. **No inventar nada.** No invento métricas, clientes, testimonios ni funciones. Si algo no se probó, lo digo: "NO VERIFICADO".

## 2. Cómo resolvemos las cosas (flujo)

1. **Respaldo antes de tocar.** Rama nueva o archivo `.tar.gz` en `~/Desktop/Proyectos/respaldos/`. `main` siempre funciona.
2. **Una rama por tarea y commits pequeños** con mensaje claro. Los PR se fusionan con *merge commit*, nunca con *squash* en ramas encadenadas, y solo cuando tú lo dices.
3. **Cambio mínimo.** Nada de librerías, servicios o abstracciones "por si acaso". Si el repositorio ya tiene una herramienta (GSAP, sharp, three.js), uso esa.
4. **Arreglar la causa, no el síntoma.** Si una pantalla falla, busco el error real; en TaskFlow era una consulta de Prisma con `select` e `include` juntos.
5. **Verificar antes de decir "listo":**
   - lint, tipos y build;
   - pruebas: unitarias, integración y e2e con Playwright;
   - capturas reales a 1440 y 390 px, en claro y en oscuro;
   - accesibilidad con axe y contraste AA medido.
6. **Revisión independiente.** Al terminar un diseño, otro agente lo revisa contra lo acordado y sus correcciones se aplican antes de cerrar.
7. **Documentar.** Decisiones grandes en ADR (`docs/decisiones/`), avance en `docs/proyecto/` y sistema de diseño en `DESIGN.md`.
8. **Seguridad siempre:**
   - secretos solo en `.env.local` o en el proveedor, nunca en git; reviso `git check-ignore` antes;
   - nunca te pido contraseñas;
   - antes de crear algo en la nube, reviso precios y que no pida tarjeta.

## 3. Ahorro de tokens (y de tiempo)

- **Leer solo lo necesario:** `grep` para ubicar, y luego leer el fragmento, no el archivo entero.
- **Agrupar:** varios cambios en un solo script o lote, y varias capturas en una sola imagen combinada para revisarlas de un vistazo.
- **Verificar por lotes:** corrijo todo lo que muestra una captura y vuelvo a capturar una vez, no después de cada ajuste.
- **No repetir trabajo:** no releo lo que acabo de escribir ni vuelvo a discutir lo que ya decidiste.
- **Cambiar escalas, no clases:** en TaskFlow redefiní `slate` y `blue` en `tailwind.config` y eso rebrandeó 445 usos sin editarlos uno por uno.
- **Memoria entre sesiones:** guardo el estado del encargo en la memoria del proyecto para retomar sin volver a explorar.
- **Subagentes solo cuando aportan,** por ejemplo una revisión independiente o documentar en paralelo, no para tareas que puedo hacer directo.

## 4. Diseño UI/UX: el método

### 4.1 Antes de dibujar: el producto

- `PRODUCT.md`: para quién es, qué debe lograr, voz (en Hito, "cómplice y directa"), lo intocable (nombre, logo, paleta) y lo que hay que evitar.
- **El modo de cada pantalla define la ambición:**
  - **Persuadir** (landing): audaz, con un momento memorable.
  - **Operar** (la app): precisión y mesura; la marca vive en los detalles.
  - **Leer** (documentación): estructura y comodidad de lectura.
  - **Experiencia** (portafolio): el trabajo real es el protagonista.

### 4.2 Dirección creativa (antes que la auditoría)

- Primero la estética, después accesibilidad y checklists. Si la auditoría va primero, el diseño sale genérico.
- **Un mundo propio sacado del contenido real.** Hito es "El expediente sellado": carpeta, hojas y sellos de tinta. TaskFlow es "Señal": tablero de salidas, porque su corazón es la sincronización en vivo.
- **Un elemento firma visible en la primera pantalla.** En Hito es la hoja que puedes operar: aprobar estampa un sello y pagar baja lo que te deben.
- **Prueba final:** si quito el nombre, ¿podría ser cualquier plantilla? Si sí, falta.

### 4.3 Prohibido (se ve "hecho por IA")

- Plantilla SaaS: titular + 2 botones + captura, y luego filas de tarjetas iguales.
- Gradientes morado/azul, glassmorphism sin motivo, blobs, fondo de puntitos.
- Tarjetas dentro de tarjetas, íconos en cuadritos redondeados repetidos.
- Borde grueso de color en un solo lado de una tarjeta.
- Rótulos chiquitos en mayúsculas encima de cada título ("eyebrows").
- Emojis o glifos unicode como íconos: los íconos son SVG propios.
- Curvas de animación con rebote; animaciones gratuitas que estorban.
- Métricas, testimonios o "99.9 % uptime" inventados.

### 4.4 Reglas de oficio

- **Tipografía:**
  - display con carácter más una de lectura, con contraste de escala de 6 a 1 o más;
  - tracking negativo en titulares grandes;
  - mono solo para cifras, fechas e identificadores, con números tabulares;
  - mayúsculas solo en rótulos cortos, nunca en párrafos.
- **Color:**
  - tokens en `:root` y un solo acento usado con intención;
  - el modo oscuro se diseña, no se invierte;
  - contraste AA medido: texto 4.5:1, elementos grandes 3:1;
  - un acento claro (amarillo o coral) va de relleno con texto oscuro y, como texto, usa una variante más oscura.
- **Estado nunca solo por color:** siempre con texto o ícono (los sellos de Hito y las prioridades de TaskFlow). El color se reserva para lo que exige atención.
- **Layout:** romper la retícula con intención (superposición, asimetría), variar el ritmo entre secciones y, en el celular, mostrar primero lo importante.
- **Toques:** áreas de 44 px mínimo; foco de teclado visible en cada fondo.

### 4.5 Movimiento

- **Una entrada orquestada en la primera pantalla y dos o tres momentos ligados al scroll,** no fade-up en todo.
- **Duraciones:** respuesta de la interfaz entre 120 y 260 ms; momentos de marca entre 360 y 520 ms.
- **Curvas suaves de desaceleración,** sin rebote: `cubic-bezier(0.23,1,0.32,1)` y `(0.16,1,0.3,1)`.
- **Hover solo con puntero fino;** con `prefers-reduced-motion` todo queda quieto y legible.
- **Preferir CSS:** animaciones por scroll con `animation-timeline: view()` y JS solo donde aporta (GSAP con ScrollTrigger y `quickTo` para el cursor).
- **3D solo si cuenta algo:**
  - carga diferida, con alternativa estática;
  - pausa fuera de pantalla;
  - nada de scripts externos que rompan la CSP (por eso no Spline ni Unicorn Studio).

### 4.6 Rendimiento

- **Imágenes:** AVIF y WebP en varios anchos, con `width` y `height` explícitos, carga diferida y alta prioridad solo para la imagen de la primera pantalla.
- **Código:** cargar lo pesado (three.js, GSAP, Lenis) tras la primera interacción; precargar pantallas al pasar el cursor.
- **Red:** caché inmutable para los assets con hash y Brotli. Antes de optimizar, se mide (Lighthouse y tiempos reales), no se supone.

### 4.7 Cierre de diseño

1. Capturas finales a 1440 y 390 px, en claro y en oscuro, con todos los estados: carga, vacío, error y éxito.
2. Detector de `impeccable` en 0 hallazgos, o cada excepción justificada.
3. Revisión independiente con sus correcciones aplicadas.
4. `DESIGN.md` escrito a partir de lo construido, no de las intenciones.
