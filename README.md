# Gita Disale - Portfolio

**Live site: [gitadisale.com](https://gitadisale.com)**

Personal portfolio site for Gita Disale, Senior Software Engineer: career timeline, case studies, technical expertise, applied AI, education, certifications, and contact.

## Tech stack

- [TanStack Start](https://tanstack.com/start) (React 19, file-based routing, SSR)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Vite](https://vite.dev) + [Nitro](https://nitro.build) for the production server build
- TypeScript

## Running locally

Requires Node.js 22+.

```sh
npm install
npm run dev
```

Then open the URL printed in the terminal.

## Building

```sh
npm run build
node .output/server/index.mjs   # serves the production build on http://localhost:3000
```

## Deploying

Nitro detects the hosting provider at build time, so the project deploys to Vercel, Netlify, or Cloudflare without extra config: import the repo, keep the default build command (`npm run build`), and deploy. On any other host, run the Node server from `.output/server/index.mjs`.

## Project structure

```
src/
  routes/
    __root.tsx   # HTML shell, metadata, error and 404 pages
    index.tsx    # the portfolio page
  assets/        # portrait image
  styles.css     # design tokens and page styles
```
