# my-site

## Run locally
npm install
npm run dev        # http://localhost:4321

## Build for GitHub Pages
1. In astro.config.mjs, set `site` to https://<username>.github.io
   and `base` to `/<repo-name>` (or `/` if this repo IS <username>.github.io).
2. npm run build   -> outputs to dist/
3. Deploy dist/ via GitHub Actions or the gh-pages branch.

## To customize
- src/components/Hero.astro   -> your name, tagline, email, portrait
- src/pages/index.astro       -> all section content (education, research, etc.)
- src/styles/global.css       -> colors, fonts (the --ink/--blue/--amber tokens)
- public/resume.pdf, public/cv.pdf -> add your real files; the download
  buttons in Hero.astro already point at /resume.pdf and /cv.pdf
- public/assets/portrait-placeholder.svg -> replace with a real photo
  (update the src in Hero.astro)
# portfolio

# NEXT TO DOs
- add a subcaption to hobby gallery
- add a dropdown to timelines
