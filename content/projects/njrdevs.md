---
title: "NJRDEVS.com"
summary: "This site: a hand-built design system on Hugo, deployed to Cloudflare's edge with custom domains, dark mode and cache-safe assets."
stack: ["Hugo", "Cloudflare Workers", "CSS"]
weight: 40
tags: ["NJRDEVS", "Hugo", "Cloudflare Workers", "Static Site", "Design System", "Dark Mode", "Web Performance"]
description: "How njrdevs.com is designed, built and deployed."
cover:
 image: "njrdevs.png"
---
[Live site](https://njrdevs.com) | [GitHub](https://github.com/tacticalninj4/njrdevs)

## Overview

NJRDEVS.com is my portfolio, and it is built the same way I build client work: no theme, no page builder, every layer owned end to end. The design follows a brutalist system called Rawblock — black on white, thick rules, no radius, no shadows — implemented from scratch as Hugo layouts and a single stylesheet.

## Frontend

- **Custom layouts, no theme.** Every page type (home, project index, articles, search, 404) is its own Hugo template, sharing a small set of partials.
- **One typeface, self-hosted.** Archivo as a single variable font file covers every weight on the site, from body text to the 900-weight headlines.
- **Light and dark mode.** Colours are two design tokens. Dark mode follows the operating system by default, a toggle overrides it, and the choice is applied before first paint so the page never flashes the wrong theme.
- **Mobile navigation.** On small screens the nav collapses behind a Menu button into a two-column grid; without JavaScript it simply stays open.
- **Client-side search.** Hugo generates a JSON index of every page at build time, and a small script filters it in the browser — no search service to run.

## Build and deployment

- **Static build, edge delivery.** Hugo compiles the site to plain HTML and CSS, which is served as static assets from Cloudflare Workers across Cloudflare's global network.
- **Custom domains.** The apex domain and `www` both point at the Worker, with DNS and TLS certificates provisioned by Cloudflare.
- **Cache-safe assets.** Fonts and styles are cached by browsers for a year. The stylesheet is fingerprinted with a content hash at build time, so every change ships under a new URL and nobody gets stale CSS.
- **One-command deploys.** `hugo --minify && wrangler deploy` builds and publishes the whole site.

## Details

The favicon is generated from the Archivo glyph outlines rather than live text, so it renders identically on every device regardless of installed fonts, centred on the letters' actual ink bounds.
