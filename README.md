# Developer portfolio

Personal portfolio site built with SvelteKit (Svelte 5) and TypeScript. Content
(projects, work experience, skills) lives in a Sanity CMS dataset and the contact
form sends email through SendGrid.

Live: _not deployed yet_ — run it locally with the steps below.

## Pages

- `/` — hero, about me, experience table, projects, skills, contact form
- `/work/[slug]` — a single project fetched from Sanity
- `POST /api/send-email` — contact form handler (SendGrid)

## Run locally

```bash
npm install
echo "SENDGRID_API_KEY=..." > .env
npm run dev -- --open
```

Sanity project id and dataset are set in `src/lib/utils/sanity.ts`.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Vite dev server |
| `npm run build` / `preview` | Production build / serve the build |
| `npm run check` | `svelte-check` type check |
