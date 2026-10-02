# slattum.app

Personal site built from Astro's official Portfolio theme, deployed to GitHub Pages.

## Run it locally

```sh
npm install
npm run dev      # http://localhost:4321
```

## Edit content

- **Name, email, location, links:** `src/data/site.ts` (GitHub and LinkedIn stay hidden until you add URLs).
- **Outside-work interests:** `interests` in `src/data/site.ts`.
- **Experience:** one Markdown file per role in `src/content/work/`. Edit the `description` and the body text. Each role gets its own page.
- **Home page copy:** `src/pages/index.astro` (hero) and `src/components/Skills.astro` (the three highlights).
- **About page:** `src/pages/about.astro`.
- **Your photo:** add `public/assets/portrait.jpg` (portrait orientation works best) and it appears in the home page hero automatically.

## Deploy to GitHub Pages

1. Create a GitHub repo and push this project to the `main` branch.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions.**
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and deploys.
4. In **Settings → Pages → Custom domain**, enter `slattum.app` (`public/CNAME` also sets this).
5. In Cloudflare DNS for slattum.app, add (all **DNS only**, grey cloud):
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www` → `<your-github-username>.github.io`
   Leave the existing iCloud MX/TXT records alone.
6. Once GitHub shows the certificate is ready, check **Enforce HTTPS**.
7. Verify the domain in your GitHub account: **Settings → Pages → Add a domain**.
