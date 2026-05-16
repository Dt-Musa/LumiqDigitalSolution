# Lumiq Digital Solutions — Marketing Site

Marketing site for **Lumiq Digital Solutions**, a studio building websites,
landing pages, e-commerce stores, and Web3 integrations for businesses across
East Africa and beyond.

Built with **React 19 + Vite**.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Copy the env template and fill in real values
cp .env.example .env.local

# 3. Run the dev server (http://localhost:5173)
npm run dev
```

## Available scripts

| Command           | Purpose                                  |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the Vite dev server with HMR       |
| `npm run build`   | Production build to `dist/`              |
| `npm run preview` | Serve the production build locally       |
| `npm run lint`    | Run ESLint over the project              |

## Configuration

All runtime config lives in [`src/lib/config.js`](src/lib/config.js) and is
sourced from Vite environment variables (prefix `VITE_`). See
[`.env.example`](.env.example) for the full list.

The contact form currently hands enquiries off via `mailto:` (opens the user's
email client with a prefilled message). Wire it up to a real endpoint
(Formspree / Web3Forms / your own API) inside
[`src/sections/Contact.jsx`](src/sections/Contact.jsx) when ready.

## Project structure

```
src/
├── App.jsx                    # Top-level composition (no logic)
├── main.jsx                   # React entry
├── index.css                  # Reset / minimal globals
├── data/
│   └── content.js             # All site copy (services, FAQ, pricing, etc.)
├── hooks/
│   └── useInView.js           # IntersectionObserver hook
├── lib/
│   ├── tokens.js              # Design tokens (colors, helpers)
│   └── config.js              # Runtime config from env vars
├── components/
│   ├── GlobalStyles.jsx       # Single <style> block (keyframes, utilities)
│   ├── Navbar.jsx             # Sticky nav + mobile drawer
│   ├── Footer.jsx
│   ├── Logo.jsx
│   ├── Reveal.jsx             # Scroll-reveal wrapper
│   ├── SectionHeader.jsx      # Eyebrow + heading combo
│   ├── SkipLink.jsx           # A11y skip-to-content
│   └── icons.jsx              # Inline SVG icon set
└── sections/
    ├── Hero.jsx
    ├── Why.jsx
    ├── Services.jsx
    ├── Process.jsx
    ├── Testimonials.jsx
    ├── Pricing.jsx
    ├── FAQ.jsx
    ├── CTA.jsx
    └── Contact.jsx
```

**Editing copy?** Touch only `src/data/content.js`.
**Editing colors?** Touch only `src/lib/tokens.js`.
**Editing layout/animation?** Touch `src/components/GlobalStyles.jsx` or the
relevant section file.

## Accessibility

- Keyboard-only "Skip to content" link
- Semantic landmarks (`<nav>`, `<main>`, `<footer>`)
- `aria-expanded` on collapsible service / FAQ rows
- `prefers-reduced-motion` respected (animations disabled)
- Focus rings on all interactive elements

## Deployment

Any static host works (Netlify, Vercel, Cloudflare Pages, GitHub Pages):

```bash
npm run build
# upload the contents of `dist/` to your host
```

Make sure to set the `VITE_*` environment variables on the host before the
build runs.

## License

© Lumiq Digital Solutions. All rights reserved.
