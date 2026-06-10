# Funakpo Compute

Marketing landing page for Funakpo Compute, built with Next.js 15, React 19, and Tailwind CSS. Ready to deploy to Vercel.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Environment variables

These are optional — the site works without them, but configure them for production:

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL of the deployed site (used for metadata, sitemap, robots). e.g. `https://yourdomain.com` |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Your [Formspree](https://formspree.io) form endpoint (e.g. `https://formspree.io/f/xxxxxxxx`). If unset, the contact form gracefully falls back to opening the visitor's email client. |

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import the project in Vercel — the framework is auto-detected as Next.js.
3. Add the environment variables above in Project Settings.
4. Connect a custom domain under Settings → Domains.
