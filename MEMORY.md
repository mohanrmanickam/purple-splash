# Memory — Purple Splash Infonet website

Handoff file for any agent continuing this project. Read this before changing the site.

**Workspace:** `/Users/mohanr/work/purple-splash` (Git repo; continue from here)  
**Previous folder:** `/Users/mohanr/work/purple` — original build folder; files were copied here on 2026-08-13  
**Remote:** `https://github.com/mohanrmanickam/purple-splash.git`  
**Last updated:** 2026-08-13

---

## Company

- **Legal name:** Purple Splash Infonet Pvt. Ltd.
- **Short brand in the logo:** “Purple Splash” on the first line, “Infonet Pvt. Ltd.” on the second.
- Do **not** use “Purple Splash Consultancy” or “Purple Spalesh”. Those were earlier mistakes and were replaced site-wide.
- Placeholder email still used: `hello@purplesplash.example` (not a real inbox).

---

## What this project is

A **modern static marketing site** (HTML5 + CSS + vanilla JS, no build, no framework) meant to be hosted on **GitHub Pages**. Layout: sticky top nav, page content, footer.

The user asked for a brochure site first; **dynamic content comes later**. Sample copy was taken from [revgurus.com](https://revgurus.com/) and rebranded. Real logo, legal copy, addresses, testimonials, and client list will be swapped in later.

Reference site was used for **section structure and placeholder wording only**. Do not copy RevGurus images, CSS, or trademarked client logos.

---

## What was already built

### Stack and hosting decisions

- Plain HTML / CSS / JS. No npm, no bundler, no Jekyll, no React.
- Empty `.nojekyll` at repo root so GitHub Pages does not run Jekyll.
- **Relative URLs** everywhere so the site works at `https://<user>.github.io/<repo>/` and at a custom domain.
- Deploy from GitHub **Settings → Pages → branch `main` / folder `/ (root)`**.
- Local preview: `npx serve .` (a server was previously run on port 4173).
- Contact form is **Formspree-ready** (`action="https://formspree.io/f/xxxx"`). Until a real form ID is set, `assets/js/main.js` intercepts submit and shows a sample success message. There is also a `mailto:` fallback.

### Pages (all exist)

| Page | File |
| --- | --- |
| Home | `index.html` |
| About Us | `about.html` |
| Zuora RevPro | `products/zuora-revpro.html` |
| Zuora Billing | `products/zuora-billing.html` |
| Consulting Services | `services/consulting.html` |
| Implementation | `services/implementation.html` |
| Managed Services | `services/managed-services.html` |
| Contact Us | `contact.html` |

No separate Products or Services landing pages. Those nav labels open the first child and show a dropdown (desktop hover / mobile accordion).

### Home sections (done)

1. JS image slider — 4 slides, autoplay 5s, pause on hover, dots + arrows, swipe, respects `prefers-reduced-motion`
2. Who Are We? — sample copy from RevGurus, name swapped
3. What We Offer? — Consulting, Implementation, Support → service pages
4. Why Us? — six differentiators + ISO/IEC 27001:2022 sample callout
5. Testimonials — JS carousel, sample quotes, “RevGurus” rewritten as Purple Splash Infonet
6. Our Clients — CSS marquee of **text wordmarks** (Ducommun, Veritas, Altair, etc.), not real logos

### Shared chrome (done)

- Sticky header, mobile hamburger, Products/Services dropdowns, Contact CTA
- Footer with brand, links, placeholder contact, copyright year via JS
- Header/footer HTML is **duplicated on every page** on purpose (no include/build). Edit all copies if you change nav.

### Assets (done)

```
assets/css/styles.css      shared styles / tokens
assets/js/main.js          header scroll, mobile nav, dropdowns, year, contact form
assets/js/slider.js        home hero slider
assets/js/carousel.js      testimonials (1 / 2 / 3 cards by viewport)
assets/img/logo.svg        placeholder splash-droplet mark
assets/img/favicon.svg     same mark
assets/img/slides/slide-1.jpg … slide-4.jpg   generated hero photos (not from RevGurus)
```

### Design tokens in CSS

- Primary `#4C1D95`, accent `#7C3AED`, highlight `#C4B5FD`, ink `#0F172A`, muted `#64748B`, surface `#F8FAFC`, footer `#16082B`
- Fonts: Plus Jakarta Sans (headings), Source Sans 3 (body) from Google Fonts
- Max content width ~1120px; hamburger under 980px

### Name change already applied

The first build used “Purple Splash Consultancy”. The user corrected it to **Purple Splash Infonet Pvt. Ltd.** That rename is done in titles, meta, logos, body, FAQs, testimonials, contact address, copyright, and `README.md`. Do not reintroduce the old name.

---

## Still placeholder — user will update later

- Real logo (replace `assets/img/logo.svg` and `favicon.svg`)
- Real copy (all HTML is the source of truth)
- Real testimonials and client list
- Real office addresses (currently sample US + India addresses from RevGurus)
- Real email / Formspree ID
- ISO certification claim (copied as sample; verify before launch)
- Hero photos (generated stand-ins)

---

## Out of scope so far

- Git repo not initialized in this folder (no `.git` when last checked)
- No blog, careers, or knowledge center
- No backend, CMS, or analytics
- No custom domain / CNAME file
- Browser click-through was not available in the original session; pages and links were verified over HTTP (all 200)
- Git: repo exists at `/Users/mohanr/work/purple-splash` with remote `origin` → `https://github.com/mohanrmanickam/purple-splash.git`. Site files are copied but **not committed yet**. A failed clone also exists at `/Users/mohanr/work/purple/purple-splash` (ignore that nested folder).

---

## How to change things (for the next agent)

| Task | Do this |
| --- | --- |
| Rename company again | Search all `.html` / `README.md` / `logo.svg` for `Purple Splash Infonet Pvt. Ltd.` and the logo subtitle `Infonet Pvt. Ltd.` |
| Edit copy | Edit the HTML files directly |
| Swap logo | Replace `assets/img/logo.svg` and `favicon.svg` |
| Swap hero images | Replace `assets/img/slides/slide-*.jpg` |
| Enable the contact form | Put a real Formspree ID in `contact.html` instead of `xxxx` |
| Change nav | Update the same header/footer block on **every** HTML page (root vs `products/` / `services/` use different relative paths) |
| Add dynamic content later | Keep this static shell; add Formspree / a JSON file / or a SSG only if page count grows |

---

## User intent to keep in mind

- Host on GitHub Pages; generated code must stay static-friendly.
- Modern look, not a visual clone of RevGurus.
- Content is sample and will be rewritten.
- Dynamic features are a later phase — do not add a heavy framework unless the user asks.
