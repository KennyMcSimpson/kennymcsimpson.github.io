# kennymcsimpson.github.io

[Visit the site](https://kennymcsimpson.github.io/) · [The Ecosystem](https://kennymcsimpson.github.io/ecosystem/) · [Open source](https://kennymcsimpson.github.io/contributions/) · [Now](https://kennymcsimpson.github.io/now/) · [Notes](https://kennymcsimpson.github.io/notes/) · [RSS](https://kennymcsimpson.github.io/feed.xml)

Kenny’s personal site, in English and Chinese: the Ecosystem he uses every day (PI, his fork of the open-source [PI Desktop](https://github.com/AR307/PI-Desktop), and what grew around it), the fixes he has sent upstream, a now page and a few notes. His PI build is not released.

Plain HTML and CSS with a little JavaScript. No build step, framework, external request, analytics or dependency. GitHub Pages publishes `main` from the repository root; to preview, serve this directory with any static server.

| File | What it holds |
| :-- | :-- |
| `index.html` | Home: who, the Ecosystem in brief, selected contributions, now, notes, contact |
| `ecosystem/` | The Ecosystem drawn out (an inline SVG; a tap-to-open list on narrow screens), each part, a day, public vs. not yet |
| `contributions/` | Every merged upstream PR, grouped by kind (a dated snapshot) |
| `now/`, `uses/`, `notes/` | Now page; tools and colophon; field notes |
| `styles.css` | All styles: one reading column, system fonts, light and dark |
| `prefs.js` | Language and theme, applied before first paint |
| `site.js` | Language and theme switches, the figure, reading progress, forwarding of old links |
| `404.html`, `feed.xml`, `sitemap.xml` | Not-found page, RSS, sitemap |

Both languages live in the same page as `data-l="en"` / `data-l="zh"` pairs; CSS shows the half that matches `<html data-lang>`. The language follows the browser unless chosen with the switch or `?lang=en` / `?lang=zh`; the theme follows the system unless chosen at the bottom of the page. Old links such as `/#day` and `/?star=lyra` forward to the matching place on `/ecosystem/`.

Contribution counts are a dated snapshot (2026-11-03); each PR link was checked against the GitHub API.
