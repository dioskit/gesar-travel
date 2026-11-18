import { defineConfig } from 'astro/config';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// GitHub Pages serves the site from https://dioskit.github.io/gesar-travel/.
// The source uses root-relative links ("/team/", "/images/…"); after the build they are rewritten to
// include the sub-path. When the site moves to its own domain, set BASE to '/' and SITE to that domain.
const SITE = 'https://dioskit.github.io';
// The dev server keeps serving from the root so local links work as written.
const BASE = process.argv.includes('dev') ? '/' : '/gesar-travel';

function prefixLinks(base) {
  if (base === '/' || !base) return { name: 'prefix-links', hooks: {} };
  const attr = new RegExp(`((?:href|src|poster|action)=["'])/(?!/|${base.slice(1)}/)`, 'g');
  const cssUrl = new RegExp(`url\\((["']?)/(?!/|${base.slice(1)}/)`, 'g');
  const fix = (s) => s.replace(attr, `$1${base}/`).replace(cssUrl, `url($1${base}/`);

  async function* walk(dir) {
    for (const e of await readdir(dir, { withFileTypes: true })) {
      const p = join(dir, e.name);
      if (e.isDirectory()) yield* walk(p);
      else if (/\.(html|css)$/.test(e.name)) yield p;
    }
  }
  return {
    name: 'prefix-links',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        for await (const file of walk(fileURLToPath(dir))) {
          const src = await readFile(file, 'utf8');
          const out = fix(src);
          if (out !== src) await writeFile(file, out);
        }
      },
    },
  };
}

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [prefixLinks(BASE)],
});
