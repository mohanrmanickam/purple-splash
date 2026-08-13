# Purple Splash Infonet Pvt. Ltd.

Static marketing site for **Purple Splash Infonet Pvt. Ltd.** Built with HTML5, CSS, and vanilla JavaScript so it can be hosted on GitHub Pages with no build step.

Agent handoff: read [`MEMORY.md`](MEMORY.md) before changing the site.

Sample copy is adapted from [revgurus.com](https://revgurus.com/) and is meant to be replaced.

## Local preview

Open `index.html` in a browser, or from this folder:

```bash
npx --yes serve .
```

Then visit the URL printed in the terminal (usually `http://localhost:3000`).

## Publish on GitHub Pages

1. Create a GitHub repository and push this project to the `main` branch.
2. In the repo: **Settings → Pages**.
3. Source: **Deploy from a branch**.
4. Branch: `main` / folder: `/ (root)`.
5. After a minute the site is at `https://<username>.github.io/<repo>/`.

This repo includes a `.nojekyll` file so GitHub does not process the site with Jekyll.

Relative links are used throughout, so the site works both at the domain root and under a project path.

## Update later

| What | Where |
| --- | --- |
| Logo | `assets/img/logo.svg` (and `favicon.svg`) |
| Hero images | `assets/img/slides/slide-1.jpg` … `slide-4.jpg` |
| Copy | Edit the HTML files directly |
| Contact form | Replace `https://formspree.io/f/xxxx` in `contact.html` with your Formspree form ID |
| Email / addresses | `contact.html` and the footer on each page |

## Site map

- `index.html` — Home (slider, who we are, offer, why us, testimonials, clients)
- `about.html` — About Us
- `products/zuora-revpro.html`
- `products/zuora-billing.html`
- `services/consulting.html`
- `services/implementation.html`
- `services/managed-services.html`
- `contact.html`
