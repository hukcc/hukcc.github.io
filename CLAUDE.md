# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based personal academic website built on the [Academic Pages](https://github.com/academicpages/academicpages.github.io) theme (derived from Minimal Mistakes). It is deployed via GitHub Pages.

## Development Commands

```bash
# Install Ruby dependencies
bundle install

# Serve locally with live reload
bundle exec jekyll serve -l -H localhost
# or simply:
jekyll serve -l -H localhost

# Docker alternative (serves at localhost:4000)
docker compose up

# Build/minify JavaScript
npm run build:js

# Watch JS for changes and auto-rebuild
npm run watch:js
```

## Architecture

**Content is organized into Jekyll collections** defined in `_config.yml`:
- `_pages/` — standalone pages (about/homepage, CV, publications list, portfolio, talks)
- `_publications/` — individual publication entries
- `_portfolio/` — portfolio project entries
- `_talks/` — talk entries
- `_posts/` — blog posts

**Templating** uses Liquid. Layouts in `_layouts/` compose via `default.html` → `single.html` (content + sidebar). Reusable components live in `_includes/` (masthead, author-profile, sidebar, footer, SEO, etc.).

**Data files** in `_data/` drive navigation (`navigation.yml`), author info (`authors.yml`), CV data (`cv.json`), and UI strings (`ui-text.yml`). The `scripts/cv_markdown_to_json.py` utility converts a markdown CV to `_data/cv.json`.

**Styling** uses SCSS in `_sass/`. Theme variants (light/dark) live in `_sass/theme/` (e.g., `_air_light.scss`, `_air_dark.scss`). Layout styles are in `_sass/layout/`. The compiled entry point is `assets/css/main.scss`.

**Dark/light mode** is toggled client-side via `assets/js/_main.js`, which reads/writes `localStorage` and sets a `data-theme` attribute on `<html>`. The minified output is `assets/js/main.min.js` — always run `npm run build:js` after editing any JS in `assets/js/`.

**Site-wide configuration** (title, author info, social links, plugins, collections, defaults) is in `_config.yml`. Changes here require restarting the Jekyll server to take effect.
