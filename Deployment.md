# Deployment Guide

This guide covers deploying the Echo Talk marketing website to OCI Object Storage with Cloudflare Workers.

## Prerequisites

- Node.js 18+ and npm
- OCI CLI installed and configured (`oci setup config`)
- A Cloudflare account with the `echo-talk.com` zone

## Build for Production

```bash
# Install dependencies
npm install

# Build the application
npm run build
```

The built files will be in the `dist/` directory.

## Deployment Options

### 1. OCI Object Storage + Cloudflare Workers (Recommended)

#### Build and Upload

```bash
# Build the application
npm run build

# Upload to OCI Object Storage
./upload.sh
```

The `upload.sh` script clears the bucket and re-uploads all assets with correct `Content-Type` headers.

> **Note:** Unlike `aws s3 sync --delete`, `oci os object bulk-upload --overwrite` only overwrites existing objects — it does not remove stale files from previous builds. `upload.sh` handles this by running `bulk-delete` before uploading.

#### OCI Object Storage Configuration

1. Create a bucket named `echo-talk-official-web` in your OCI compartment
2. Set bucket visibility to **Public**
3. Enable **Static Website Hosting** and set `index.html` as the default object

#### Step 1 — Create Cloudflare Worker

Cloudflare Dashboard → Workers & Pages → Create Worker → paste:

```javascript
const OCI_REGION = 'ca-toronto-1';
const OCI_NAMESPACE = 'yzwaexqwltre';
const OCI_BUCKET = 'echo-talk-official-web';
const OCI_BASE = `https://objectstorage.${OCI_REGION}.oraclecloud.com/n/${OCI_NAMESPACE}/b/${OCI_BUCKET}/o`;

export default {
  async fetch(request) {
    const url = new URL(request.url);
    let path = url.pathname;

    if (path === '/' || !path.includes('.')) {
      path = '/index.html';
    }

    const response = await fetch(`${OCI_BASE}${path}`);

    if (response.status === 404) {
      return fetch(`${OCI_BASE}/index.html`);
    }

    return response;
  },
};
```

This worker handles SPA routing by falling back to `index.html` for any path that does not contain a file extension (i.e. `/privacy`, `/terms`).

#### Step 2 — Add DNS in Cloudflare

```
Type:  AAAA
Name:  @
Value: 100::
Proxy: orange cloud (on)
```

Add a second record for `www` if needed:

```
Type:  AAAA
Name:  www
Value: 100::
Proxy: orange cloud (on)
```

#### Step 3 — Add Worker Route

Workers & Pages → your worker → Settings → Triggers → Add Route:

```
Route: echo-talk.com/*
Zone:  echo-talk.com
Fail open: on
```

Add a second route for `www` if needed:

```
Route: www.echo-talk.com/*
Zone:  echo-talk.com
Fail open: on
```

#### Step 4 — Verify

```
https://echo-talk.com
https://echo-talk.com/privacy
https://echo-talk.com/terms
```

---

### 2. Cloudflare Pages (Alternative)

**Option A: Via Cloudflare Dashboard**

1. Go to [Cloudflare Pages](https://pages.cloudflare.com)
2. Click "Create a project" → "Connect to Git"
3. Select the `AnonymousWall/OfficialWeb` repository
4. Configure build settings:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Click "Save and Deploy"

**Option B: Via Wrangler CLI**

```bash
npm install -g wrangler
wrangler pages deploy dist --project-name echo-talk-web
```

Add a `public/_redirects` file for SPA fallback if needed:

```
/* /index.html 200
```

---

## Local Development

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

---

## Environment Variables

No environment variables are required. The marketing website is fully static.

---

## Build Output

The `npm run build` command produces:

- `dist/index.html` — main entry point
- `dist/assets/` — bundled JS and CSS
- All files are ready to serve as a static site

---

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### 404 Errors on Direct URL Access

The Cloudflare Worker handles SPA routing by returning `index.html` for paths without a file extension. If you are seeing 404s, verify the Worker is deployed and the route is configured correctly in Step 3.

### OCI Upload Fails

- Ensure OCI CLI is configured: `oci setup config`
- Verify the bucket `echo-talk-official-web` exists and is public
- Check that your OCI user has `OBJECT_WRITE` permission on the bucket

### Stale Files After Deployment

`upload.sh` runs `bulk-delete` before uploading, so stale files from previous builds are removed automatically. If you upload manually with `bulk-upload --overwrite`, old files with different names will remain and must be deleted manually via the OCI Console.

