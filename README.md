# alexvilla000.github.io

Personal portfolio served with GitHub Pages at https://alexvilla000.github.io.
Static HTML/CSS/JS, no build step.

## Structure

- `index.html` — page structure and static content (hero, about, experience, contact)
- `assets/css/style.css` — design tokens (light/dark), layout and responsive rules
- `assets/js/main.js` — `PROJECTS` array (edit it to add projects), tag filter, theme toggle
- `.nojekyll` — disables Jekyll processing

## Local preview

```sh
python -m http.server 8000
```

Then open http://localhost:8000.
