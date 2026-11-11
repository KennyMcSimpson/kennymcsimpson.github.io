# kennymcsimpson.github.io

[Visit the site](https://kennymcsimpson.github.io/) · [The Ecosystem](https://kennymcsimpson.github.io/ecosystem/) · [Now](https://kennymcsimpson.github.io/now/) · [Notes](https://kennymcsimpson.github.io/notes/) · [RSS](https://kennymcsimpson.github.io/feed.xml)

Kenny’s personal site, in English and Chinese: an illustrated workbench, a map of the Ecosystem, a now page and a few notes. PI is his personal fork of the open-source [PI Desktop](https://github.com/AR307/PI-Desktop); his build is not released.

Plain HTML, CSS and a little JavaScript. No framework, build step, web font or dependency; illustrations use inline SVG. GitHub Pages publishes `main` from the repository root. To preview, serve this directory with any static server.

| File | What it holds |
| :-- | :-- |
| `index.html` | Home: the workbench, Ecosystem tiles, now, notes and contact links |
| `ecosystem/` | The Ecosystem map, an ordinary day, and which parts are public |
| `now/`, `uses/`, `notes/` | Current work, tools and field notes |
| `assets/` | Favicon |
| `styles.css` | Layout, drawing styles, day and night colours, and reduced motion |
| `prefs.js`, `site.js` | Language, theme, legacy links and the Ecosystem map |
| `404.html`, `feed.xml`, `sitemap.xml` | Not-found page, RSS and sitemap |

Both languages live in the same page as `data-l="en"` / `data-l="zh"` pairs. Language follows the browser unless chosen with the switch or `?lang=en` / `?lang=zh`; theme follows the system unless chosen at the bottom of the page.
