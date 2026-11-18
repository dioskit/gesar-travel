# Gesar Travel website

The new website for Gesar Travel (Leh, Ladakh), built with [Astro](https://astro.build). Every page is exported as plain HTML, so the site can be hosted on any static host (Netlify, GitHub Pages, Cloudflare Pages or ordinary web hosting).

## Run it locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs the finished site to dist/
```

## Where things live

| What | Where |
|---|---|
| Pages | `src/pages/` – one file per page (`team.astro` → `/team/`) |
| Blog posts | `src/pages/blog/*.md` – add a Markdown file to add a post |
| Destinations, team, wildlife | `src/data/*.js` – edit text here, not in the pages |
| Contact email, menu | `src/data/site.js` |
| Colours, fonts, spacing | `src/styles/global.css` |
| Images | `public/images/` |
| Original notes & old-site screenshots | `instrucitons_folder/` |

## Before launch – still to do

- **Photos:** everything in `public/images/temp/` was cut from screenshots of the old website and is low resolution. Replace each with the original photo (same file name works), and add photos for the wildlife cards marked "Photo to come".
- **Logo:** the header uses a stand-in mark. Add the real logo file.
- **Destination pages:** Bhutan, Sikkim & Darjeeling and North India only have a short intro. Ladakh is the template for the full page.
- **Group tours:** add the actual tours (itinerary, dates, difficulty, price).
- **Blog:** copy the full articles from the old site into the four posts (marked "To do").
- **Legal pages:** imprint, terms and privacy policy text (`src/pages/legal-notice.astro`, `terms.astro`, `privacy.astro`).
- **Contact:** phone/WhatsApp and address in `src/data/site.js`.
- **Inquiry form:** currently opens the visitor's email app with the answers filled in. To receive submissions directly, connect a form service (e.g. Netlify Forms or Formspree).
- **German version:** the old site had one. Not built yet.
