# AGENTS.md

Alejandro's personal portfolio, published with GitHub Pages at
https://alejandrovillacampa.github.io. Its main goal is to present his professional profile
for job opportunities; the hosted projects and tools demonstrate skills in engineering,
simulation and software development.

## Source of truth: Notion

Goals, scope and decisions live in Notion, not in this repo. Access them through the Notion
MCP server and search for the page **"2026.10.23 - Base del portfolio personal y herramientas
integradas"** (under Personal / Ideas). Read it before deciding anything about scope, content
or design.

- Subpage "01 - Referencias y ejemplos similares" collects reference sites.
- Sibling pages under "Ideas" describe the tools this site will host: the Idelchik
  pressure-loss calculator, the CFD gallery with a vtk.js viewer and the tunnel
  critical-velocity comparator.

### Logging decisions

When a decision is made or the idea evolves, record it in that page following the rules on
the parent "Ideas" page:

- Append a new entry at the end of "Historial de actualizaciones", headed
  `### <date> — <assistant>` (Claude, ChatGPT, OpenCode, or the assistant's own name).
- Never edit or delete earlier entries; corrections and changes of criteria go in a new entry.
- Ideas and decisions belong to Alejandro; the entry only records who documented them.

## Current status

`STATUS.md` holds the current state and next steps. It is local only and never committed
(excluded through `.git/info/exclude`), so it may be missing in a fresh clone; in that case
rely on the Notion history.

## Stack

- Astro with static output, deployed to GitHub Pages through GitHub Actions. Not scaffolded yet.
- Interactive tools are Astro islands, loaded only on the pages that need them.
- Visual direction: light theme by default with a dark toggle; an attractive, well-structured
  site that lets visitors browse profile, projects, tools, CV and contact in an engaging way.

## Conventions

- Talk to the user in Spanish. Code, identifiers, comments and commit messages in English.
- The repo is public and is the website itself: never commit secrets, private data or
  internal links (Notion URLs included).
