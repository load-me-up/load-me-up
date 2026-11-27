# Working notes

For a fresh agent on this site. British English (`en-GB`). The public name is **Adam Quire**. The only place-word allowed in this file is **Europe**. Do not put a legal name, a home, a personal email, or any other private detail in the repo, in commits, or in chat-facing copy.

Live site: `https://loadmeup.now` (GitHub Pages, this repo, `CNAME` is `loadmeup.now`). Language of the work: men, night, kept things. No trackers, no cookies.

## Commit identity

Every commit, author and committer:

```
load-me-up <356961165+load-me-up@users.noreply.github.com>
```

Push straight to `main`. Do not open a pull request unless asked. Put `GIT_AUTHOR_*` and `GIT_COMMITTER_*` on `git commit`, not on `git add`. Do not let a Cursor or agent identity into the commit.

In-file timestamps stay `+0000`. Dates in copy are British: `21 November 2026`. RSS uses `Mon, 23 Nov 2026 00:00:00 +0000`.

## Anonymity

- Byline, strapline, `meta name="author"`, feed `author` / `managingEditor`: Adam Quire.
- Public mail: `adam@loadmeup.now` (mailto and visible text). Not `anon@`.
- Social: Telegram `https://t.me/load_me_up`, X `https://x.com/load_me_up_now`, Bluesky `https://bsky.app/profile/loadmeup.now`.
- No names, no maps, no apologies — that is the colophon line and the rule for copy.
- Photographs: strip EXIF, including location. Square, black and white. Nothing recognisable in alt text that the caption does not already say.
- Do not commit source `.md` or text drafts, licence PDFs, or invoices. They can hold a real name. The live tree is the site files plus `fonts/README.md`.
- Do not put a real name, personal email, or location in any commit, file, or metadata.

## Site shape

Hand-made static HTML and one `style.css`. No build step.

Nav (header and footer), three items: **Encounters** `/`, **Evidence** `/evidence/`, **Colophon** `/colophon.html`. Current page gets `aria-current="page"` and the red `.here` dot. Right-aligned: from 600px up, `justify-content: flex-end; column-gap: 1.75em`. On a phone, one row, `display: flex; justify-content: flex-end; column-gap: 1.25em; flex-wrap: nowrap`. `.site-nav` has `margin-top: 0.75rem`. Do not go back to a 2×2 grid.

Section pages hide the `h1` with `.visually-hidden` (Encounters, Evidence, Colophon). The masthead is a `<p class="masthead">` everywhere. Poem titles are visible `h1`s inside `<article>`.

### Files

| Path | Role |
| --- | --- |
| `index.html` | Home / Encounters. Poem list. |
| `the-hole-of-glory.html` | Poem **Glory**. URL kept; do not rename the file. |
| `cocks-dont-need-names.html` | Poem **No names**. URL kept; do not rename the file. |
| `evidence/index.html` | Evidence. Relics visible; Voyages still in the markup with `hidden`. |
| `evidence/no-1/` | Six plates for № 1, Uniform. |
| `colophon.html` | Colophon. |
| `about.html` | Redirect stub → `/colophon.html`. |
| `nobody.html` | Redirect stub → `/colophon.html`. |
| `nocturnes/` | Redirect stubs → home or the poem files. Old titles may still be in those stubs. |
| `marginalia/index.html` | Redirect stub → `/`. Section removed; keep the stub so old links work. |
| `feed.xml` | RSS. No Marginalia items. |
| `style.css`, `theme.js` | One stylesheet, one theme script (`/theme.js?v=2`). |
| `fonts/` | Jannon WOFF. `robots.txt` disallows `/fonts/`. |
| `CNAME`, favicons, `robots.txt`, `feed.xml` | Live-site extras. |
| `glitch/` | Separate tool, added later. Not part of the poetry site’s rules below. |

Redirect stubs match the nocturnes pattern: `meta refresh`, canonical, `robots noindex`, one plain link.

## Copy that is current

Home intro: *Kept things, left feelings. Written by a man, mostly at night, always about men. Door’s open.*

Colophon, in order: the *Load me up* paragraph; the Jannon / HTML / CSS paragraph; `Hook up with me:` (mail or Telegram); `Darkrooms:` (X · Bluesky); then `© 2026 Adam Quire. All rights reserved.` The two `.contact` lines sit on a paragraph’s line-gap (`margin-bottom: 0` then `margin-top: 0` on adjacent `.contact`). Ordinary paragraph space above Hook up and above the copyright.

Poems on the home list, newest first: Glory (21 November 2026), No names (20 November 2026). Poem pages themselves have **no** dateline and **no** “– Adam Quire.” sign-off. Dates stay on the home list and as `pubDate` in the feed. Keep `<meta name="author" content="Adam Quire">`.

Glory body starts `thick fabric blackout` and ends `he’s gone`. No names still contains the line *Cocks don’t need names.* inside the poem.

## Typography

- Curly apostrophe U+2019 (`don’t`, `Door’s`, `he’s`). Curly quotes. Spaced en dash. Ellipsis U+2026, not `...`.
- Poems: `.poem { white-space: pre-line }`. Line breaks and blank stanza lines live in the HTML. No `<br>`. No trailing spaces. First line starts immediately after `<div class="poem">`.
- Red (`--red`) is only a full stop: strapline, `.title-stop`, footer tagline, current-page `.here`, Evidence plate sign-off stop. Nothing else is a colour besides paper, ink, grey.
- Faces: Jannon Text (reading, nav, footer, “Adam Quire.” strapline); Jannon Antiqua (wordmark, headings, poem titles, home intro); Jannon Sans (dates and Evidence captions only); Jannon Ornaments (home fleuron `S`). `font-synthesis: none`.
- Running text: old-style proportional figures. Dates: lining tabular. Nav and footer: lining proportional.
- Poem titles: selector **must** be `article h1:not(.masthead)` so it beats `h1:not(.masthead)`. Body size (`--size-body`), `--leading`, real small caps (`font-variant-caps: small-caps`, not `all-small-caps`), `letter-spacing: 0.03em`, `margin-bottom: 1.55em` (one poem line). Keep the red `.title-stop`. Do **not** small-cap the home list (`.pieces a`) or other headings. `.poem` also sets `font-variant-numeric: oldstyle-nums proportional-nums`.
- Home intro: `main > .intro:has(+ .pieces)` — Antiqua italic, centred.
- Theme: inline head script plus `theme.js`. Follow `prefers-color-scheme`, light default. Choice lives in `sessionStorage`, not `localStorage` (`localStorage.removeItem("theme")` on load). Favicons cache-bust with `?v=2`. `style.css` has no query string; a hard refresh may be needed after CSS-only changes.

`font-feature-settings` replaces the whole list. Any rule that sets it must repeat kern, liga, and the figure style it still wants.

## Feed

When a poem’s **display** title changes, update `<title>` and `<h1>` on the page, the home list, and the feed `<title>`. Keep the file name, URL, `link`, and `guid`. Feed authors are `adam@loadmeup.now (Adam Quire)`. `lastBuildDate` is currently `Mon, 23 Nov 2026 00:00:00 +0000`.

Evidence items in the feed still say № 1 / № 2 Untitled and “Caption to come.” The live Relics plate is **Uniform** / “A uniform, of sorts.” Voyages № 2 is still a placeholder and the room is `hidden`.

## Evidence

Numbers run across both rooms. Next plate is one higher than the last on the page. Copy the article template already in the HTML. Strip EXIF. Leave Voyages in the file; do not delete it unless asked.

## What not to revive

- Marginalia (gone; `/marginalia/` redirects home).
- Encounters as a separate folder (poems live at the root).
- One-line vs two-column experiments for four nav items — there are three items now, one right-aligned row.
- Sticky `localStorage.theme`.
- Poem-page dates and sign-off.

## Unfinished / traps

- **CSS specificity.** `h1:not(.masthead)` is display-size. Poem titles only shrink if the selector is `article h1:not(.masthead)`.
- **Voyages** is hidden, not removed.
- **nocturnes/** redirect pages may still say “The Hole of Glory” and “Cocks don’t need names.”
- **fonts/README.md** still says an “Anon.” strapline; the site strapline is Adam Quire.
- Feed Evidence titles/captions are stale versus the Uniform plate.
- A history-free copy was once pushed to `load-me-up/loadmeup`; this repo is the live Pages site and later edits landed here.
- HTML checkers may flag `color-scheme` and `color-mix` in the CSS. Those are false positives here.

When in doubt: change only what was asked, keep URLs stable, keep Adam Quire on the masthead, and keep private life out of the tree.
