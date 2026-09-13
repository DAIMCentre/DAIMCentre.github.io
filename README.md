# DAIM Open Research Portal

The open research portal of **DAIM** — the Centre of Excellence for Data Science,
Artificial Intelligence and Modelling, University of Hull.

Live at [daimcentre.github.io](https://daimcentre.github.io). Built with
[Astro](https://astro.build) and TypeScript: static pages, no backend, no
database, no client-side framework, no third-party requests.

---

## What is on the site

**Home** — what DAIM is, the five research themes, the four principles the
centre works by, and the projects currently featured.

**Research** — the five themes in full. Frontier AI covers the methods; AI for
Health, AI for Humanities, AI for Natural Science and AI for Engineering Science
are the domains those methods are put to work in. Most work sits across more
than one, and the list is expected to grow.

**Projects** — the research projects, each with the question it is asking, what
it is doing now, and how mature it is. Currently DAIM Foundation Models
(cross-domain foundation models for time-series discovery) and DAIM Research
Agents (evidence-grounded agents for reproducible research). The page is
generated from the project files, so it only ever shows what exists.

**Publications** — papers, conference contributions and preprints from
researchers working with DAIM. Being compiled; nothing is imported
automatically, so every entry is one a person has checked.

**Blogs** — shorter pieces from the research community: work in progress, method
notes, reading, and thinking that is not yet a paper.

**Team** — researchers working across the themes. The University of Hull DAIM
page remains the authoritative record of membership, and the page links to it.

---

## Editing it

Page text lives in Markdown under `src/content/` — one file per project,
publication, post or person. Each folder holds a `_template.md` documenting its
fields: copy it, rename it without the leading underscore, and fill it in. Files
starting with `_` are ignored, so templates never ship.

Everything else — site metadata, navigation, external links, the research themes
and the principles — lives in `src/data/`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-checks, then builds to dist/
```

Use `npm run rebuild` after deleting a content file: Astro caches the content
layer, and a plain build can still emit the removed entry. Stop `astro dev`
first, since rebuilding clears the store a running dev server depends on.

The logo at `public/logos/daim-uoh-logo.svg` is a cleaned version of the supplied
artwork, cropped flush and sized by height, so an official replacement of any
aspect ratio drops in without a code change. The source marks it was derived
from are kept in `brand/`, which is not part of the built site.

---

## Licence

Code is [MIT](LICENSE). Written content is
[CC BY 4.0](LICENSE-CONTENT.md). University of Hull and DAIM branding is
excluded from both — see [`LICENSE-CONTENT.md`](LICENSE-CONTENT.md).
