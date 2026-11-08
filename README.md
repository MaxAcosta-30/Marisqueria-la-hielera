# Marisquería La Hielera

Página de muestra para enseñar a negocios de Culiacán cómo trabajamos. El negocio es ficticio: nombre, dirección, teléfono y testimonios son inventados.

También será la plantilla base: para cada cliente nuevo se clona y se cambia solo `src/data/negocio.ts`.

## Estado

Fase 8 de 9 en curso: base del sitio en Astro lista. Ver `docs/proyecto/estado.md`.

| Carpeta | Qué hay |
|---|---|
| `docs/proyecto/` | Resumen de cada fase (01 a 07) y `estado.md` |
| `prototipos/laboratorio-color.html` | Prototipo con 11 paletas, modo claro/oscuro y escena 3D de hielo |

## Correr el sitio

```
npm install
npm run dev      # http://localhost:4321
npm test         # pruebas del armador de WhatsApp
npm run build    # genera dist/
```

## Ver el prototipo

Ábrelo con doble clic en el navegador. Necesita internet para cargar la fuente (Google Fonts) y three.js (jsDelivr).

## Stack planeado

- Astro estático, sin base de datos ni CMS
- Despliegue en Cloudflare Pages (plan Free)

## Pendiente


- Nombre del estudio y número de WhatsApp
- Construir los casos 1–7 (fase 8)
