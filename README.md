# Opervia

Static Astro website for Opervia, a web and lead follow-up service for U.S. HVAC companies.

## Local development

```sh
npm install
npm run dev
```

Astro will print the local URL, usually `http://localhost:4321`.

## Build

```sh
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Cloudflare Pages deployment

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `22`
- Production domain: `https://opervia.host`

Cloudflare Pages serves the static output and `public/_headers`.

## Content

Edit copy and structured content in `src/data/site.ts`. TODO comments mark placeholders that need supplied business information.
