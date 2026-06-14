# AI Text Game Scaffolds

A static site sharing text-based game scaffolds — structured prompts that turn
Claude, ChatGPT, or any AI chatbot into a game master. Built for GitHub Pages.

Live site: https://llmtextgames.xyz/

## Structure

```
index.html              Home page: intro, game cards, how-it-works, FAQ
404.html                Custom not-found page for GitHub Pages
games/<game-slug>/      One page per game (description, downloads, full text)
downloads/              .skill files (ZIP archives) served as direct downloads
assets/css/style.css    Site styles (design tokens at the top)
assets/js/main.js       Copy-to-clipboard buttons
assets/og-image.png     Social sharing card image
sitemap.xml             Search engine sitemap — update <lastmod> when pages change
robots.txt              Points crawlers at the sitemap
```

There is no build step or templating — each page is standalone HTML. That means
the `<head>` boilerplate, header, footer, and the compatibility note are
duplicated across pages by design (simplicity over DRY at this scale). When
editing any of those shared blocks, update **all** HTML pages.

## Adding a game

1. Copy an existing page in `games/` into a new slug folder. Use
   `games/new-vinland/` as the template for multi-file skills (it has the file
   tree and per-file accordions) or `games/fools-errand/` for single-file ones.
2. Update the title, meta description, canonical URL, `og:url`, JSON-LD block,
   description, tags (including a `Well-tested` or `Beta` badge), and prompt
   text. Prompt text inside `<pre>` blocks must be HTML-escaped
   (`&` → `&amp;`, `<` → `&lt;`).
3. Drop the `.skill` file into `downloads/` and update the download link.
4. Add a card for it on `index.html` (including in the JSON-LD `hasPart` list).
5. Add the page to `sitemap.xml`.

## URLs

All absolute URLs (canonical, Open Graph, JSON-LD, sitemap, robots) point at
`https://llmtextgames.xyz/`. If the site moves to a
custom domain, find-and-replace that base URL across the repo.

## Local preview

No build step — serve the folder with any static server:

```
python3 -m http.server
```
