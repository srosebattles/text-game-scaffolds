# Text Game Scaffolds

A static site sharing text-based game scaffolds — structured prompts that turn
Claude, ChatGPT, or any AI chatbot into a game master. Built for GitHub Pages.

## Structure

```
index.html              Home page: intro, game cards, how-it-works, FAQ
games/<game-slug>/      One page per game (description, downloads, full text)
downloads/              ZIPs and skill files served as direct downloads
assets/css/style.css    Site styles
assets/js/main.js       Copy-to-clipboard buttons
```

## Adding a game

1. Copy an existing page in `games/` (use `placeholder-game-two` for multi-file
   skills, `placeholder-game-one` for single-file ones) into a new slug folder.
2. Fill in the title, meta description, description, tags, and prompt text.
3. Drop the ZIP into `downloads/` and update the download link.
4. Add a card for it on `index.html`.

## Local preview

No build step — serve the folder with any static server:

```
python3 -m http.server
```
