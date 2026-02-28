# Echo Talk — Deployment Guide

## Cloudflare Pages (Recommended)

### Prerequisites
- Node.js 18+
- npm 9+
- A Cloudflare account

### Steps

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Build the project**
   ```bash
   npm run build
   ```
   This generates a `dist/` folder with the static site.

3. **Deploy to Cloudflare Pages**

   #### Option A: Cloudflare Dashboard (Recommended for first deploy)
   1. Go to [Cloudflare Pages](https://pages.cloudflare.com)
   2. Click "Create a project" → "Connect to Git"
   3. Select the `AnonymousWall/OfficialWeb` repository
   4. Configure build settings:
      - **Framework preset**: Vite
      - **Build command**: `npm run build`
      - **Build output directory**: `dist`
   5. Click "Save and Deploy"

   #### Option B: Wrangler CLI
   ```bash
   npm install -g wrangler
   wrangler pages deploy dist --project-name echo-talk-web
   ```

4. **SPA Routing** — Cloudflare Pages handles client-side routing automatically for Vite projects. The `dist` folder is served as-is.

   If you need to add a `_redirects` file for SPA fallback:
   ```
   /* /index.html 200
   ```
   Place it in the `public/` directory before building.

---

## Local Development

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

---

## OCI Object Storage (Alternative)

If deploying to Oracle Cloud Infrastructure Object Storage, use the provided `upload.sh` script:

```bash
npm run build
chmod +x upload.sh
./upload.sh
```

Make sure the OCI CLI is configured (`oci setup config`) before running.

---

## Environment Variables

No environment variables are required for the marketing website. Add a `.env.local` file if you need to override any build-time settings.

---

## Build Output

The `npm run build` command produces:
- `dist/index.html` — main entry point
- `dist/assets/` — bundled JS and CSS
- All files are ready to serve as a static site
