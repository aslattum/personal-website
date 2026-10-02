# slattum.app

Personal site for Adam Slattum, built with [Astro](https://astro.build/) and deployed to GitHub Pages at [slattum.app](https://slattum.app).

## Run it locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # production build in dist/
```

## Edit content

- **Name, email, location, links, skills, interests:** `src/data/site.ts`
- **Experience:** one Markdown file per role in `src/content/work/`. The `description` is the one-liner on the card; the body is the detail page. Optional `appStore:` and `github:` fields add link buttons.
- **Home page:** `src/pages/index.astro` (intro) and `src/components/Skills.astro` (the three highlight cards)
- **About page:** `src/pages/about.astro` (copy and the photo row)
- **Photos:** `public/assets/` (portrait, `interests/`, `about/`). Strip location metadata before adding new photos.
- **Link preview image:** `public/og-image.jpg` (1200×630)

## Motion

Scroll and entrance animations are opt-in via the `motion-ready` class (added in `MainHead.astro` unless the visitor prefers reduced motion). Mark elements with `data-reveal` to fade them in on scroll. Photo rows take `entrance="toss"` or `entrance="burst"`.

Dev server tip: Astro’s dev server can cache stale component styles or content. If a change doesn’t show up, re-save the file or restart with `rm -rf node_modules/.astro && npm run dev`.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and deploys to GitHub Pages.

One-time setup:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
2. **Settings → Pages → Custom domain:** `slattum.app` (`public/CNAME` also sets this).
3. DNS for slattum.app:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www` → `aslattum.github.io`
4. Once GitHub shows the certificate is ready, check **Enforce HTTPS**.
