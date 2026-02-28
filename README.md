# Echo Talk — Official Website

The official marketing website for Echo Talk, the anonymous campus social app.

## Features

✅ **Home Page**

- Full-viewport hero with gradient headline and App Store CTA
- Animated marquee ticker strip
- Feature cards (Anonymous Posts, Campus Community, Direct Messages)
- Horizontally scrollable iPhone mockup screenshots
- Download CTA section

✅ **Legal Pages**

- Privacy Policy (`/privacy`)
- Terms of Service (`/terms`)

✅ **Performance & UX**

- Scroll-triggered entrance animations (Framer Motion)
- CSS-only marquee animation (no JS library)
- Glassmorphism card design
- Fully responsive — mobile-first layout
- Dark theme (`#0a0a0a`) with purple-to-pink gradient accents

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Language**: JavaScript (JSX)

## Prerequisites

- Node.js 18+ and npm

## Installation

1. Clone the repository:

```bash
git clone https://github.com/AnonymousWall/OfficialWeb.git
cd OfficialWeb
```

2. Install dependencies:

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Building for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Available Routes

- `/` — Home page (hero, features, screenshots, download CTA)
- `/privacy` — Privacy Policy
- `/terms` — Terms of Service

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx         # Fixed top navigation
│   ├── Hero.jsx           # Full-viewport hero section
│   ├── Marquee.jsx        # Infinite CSS scroll ticker
│   ├── Features.jsx       # 3-card feature grid
│   ├── Screenshots.jsx    # Horizontally scrollable mockups
│   ├── DownloadCTA.jsx    # Download call-to-action section
│   └── Footer.jsx         # Footer with links
├── pages/
│   ├── Home.jsx           # Home page
│   ├── Privacy.jsx        # Privacy Policy page
│   └── Terms.jsx          # Terms of Service page
├── App.jsx                # Root component with routing
├── main.jsx               # Application entry point
└── index.css              # Global styles and Tailwind directives
```

## Deployment

See [Deployment.md](./Deployment.md) for full deployment instructions including OCI Object Storage and Cloudflare Workers setup.

Quick deploy via OCI Object Storage:

```bash
npm run build
chmod +x upload.sh
./upload.sh
```

## Design System

| Token | Value |
|---|---|
| Background | `#0a0a0a` |
| Gradient start | `#7c3aed` (purple) |
| Gradient end | `#ec4899` (pink) |
| Body text | `white` |
| Secondary text | `gray-400` |
| Card border | `border-white/10` |
| Card background | `bg-white/5 backdrop-blur` |
| Heading weight | 800–900 |

## License

This project is part of the Echo Talk platform.

## Support

For issues and questions, please open an issue on GitHub.