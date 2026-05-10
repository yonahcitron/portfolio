# yonahcitron.com

My personal portfolio site — live at **[yonahcitron.com](https://yonahcitron.com)**.

A single-page React/TypeScript site covering my work history, projects, skills, and a downloadable CV (rebuilt from LaTeX locally before each deploy).

## Run locally

```bash
./scripts/dev.sh
```

Builds the public CV PDF into `public/`, then starts the CRA dev server at <http://localhost:3000>. Use this instead of plain `npm start` so the in-page CV download link works.

Edit content under `src/components/` and the page hot-reloads. CV LaTeX source: `cv/yonah_citron_cv.tex`.

## Deploy

CI does the actual deploy on every push to `master` (`.github/workflows/deploy.yml` → GitHub Pages with the `yonahcitron.com` CNAME). It does **not** run xelatex, so you have to bake the CV PDF locally first:

```bash
./scripts/build-cv.sh   # rebuilds public/Yonah_Citron_CV.pdf
git add public/Yonah_Citron_CV.pdf
git commit -m "..."     # alongside whatever else changed
git push
```

The PDF is committed to the repo; CI just copies whatever is in `public/` into the deployed bundle.

For recruiter PDFs of the CV with my phone number injected (read from `pass`), run `./scripts/build-private-cv.sh` — outputs to `cv/build/` and is **not** committed.

## Credit

Forked from [yujisatojr/react-portfolio-template](https://github.com/yujisatojr/react-portfolio-template) — the original layout/design template. Heavily customised since.
