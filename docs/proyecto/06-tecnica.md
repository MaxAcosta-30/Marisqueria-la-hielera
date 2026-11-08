# Fase 6 — Solución técnica

`Decisión: Astro 7 estático | Por qué: HTML puro, casi 0 JS, LCP bajo en celular, fácil de clonar | Por qué no Next.js: más JS y build más pesado sin ganar nada aquí | Revisar si: el cliente quiere editar el menú solo (entonces Decap CMS) o cobrar en línea.`

`Decisión: Cloudflare Pages (plan Free) | Por qué: ancho de banda estático ilimitado y sin cláusula de "no comercial" | Por qué no Netlify Free: permite uso comercial, pero tiene 300 créditos/mes y pausa TODOS los sitios de la cuenta al agotarlos, riesgoso con varios clientes en una cuenta | Por qué no Vercel Hobby: solo uso no comercial (excluido) | Revisar si: Cloudflare cambia términos o se necesita backend.`

Verificación (nov 2026): Netlify confirma en su foro oficial que el plan gratuito sí admite uso comercial. Cloudflare Pages no tiene cláusula de "no comercial" en su página de límites del plan Free (500 builds/mes, 100 dominios por proyecto). Vercel Hobby es solo no comercial.

- **Datos:** sin base de datos. Todo en `src/data/negocio.ts`, tipado con TypeScript.
- **JS en el cliente:** solo lo mínimo (resaltar el día de hoy, la animación firma). El sitio funciona sin JS.
- **Fuentes:** autoalojadas con Fontsource (sin petición a Google Fonts), solo los pesos usados, `font-display: swap` + precarga de la fuente del hero.
- **Mapa:** iframe de Google Maps sin API key, `loading="lazy"`, debajo del pliegue.
- **Seguridad (nivel básico):** sin formularios ni secretos. Encabezados en `public/_headers`: CSP, `X-Frame-Options: DENY`, `Referrer-Policy`, `Permissions-Policy`. Enlaces externos con `rel="noopener"`.
- **Costo mensual:** $0 hosting + dominio del cliente.
