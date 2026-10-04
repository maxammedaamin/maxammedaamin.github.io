# GitHub Pages deployment

This project exports as a static Next.js site. The contact form submits directly
from the browser to Web3Forms; no Next.js API server, SQLite database, or SMTP
server is needed in production.

## One-time setup

1. In the repository's **Settings → Secrets and variables → Actions**, create a
   repository secret named `WEB3FORMS_ACCESS_KEY` with the access key from
   Web3Forms.
2. In **Settings → Pages**, set the build and deployment source to **GitHub
   Actions**.
3. Push to the `main` branch or manually run the **Deploy static portfolio to
   GitHub Pages** workflow.

The key is injected at build time. Because Web3Forms is called from a static
browser app, its access key is present in the published JavaScript; use
Web3Forms' domain restrictions if enabled for your account.

## Local development

Copy `.env.example` to `.env.local`, set
`NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` to the Web3Forms access key, then run:

```sh
npm install
npm run dev
```

Run `npm run build` to create the static site in `out/`. The GitHub Pages
workflow uses Bun and the committed `bun.lock` for reproducible installation.
