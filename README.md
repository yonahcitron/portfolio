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
./scripts/build-cv.sh           # rebuilds BOTH public + private CVs
git add public/Yonah_Citron_CV.pdf
git commit -m "..."             # alongside whatever else changed
git push
```

Always run `build-cv.sh` (no flags) before a deploy — it regenerates both the public PDF in `public/` (committed; CI ships it) and the private PDF with phone injected in `cv/build/` plus a copy in `~/vault/files/documents/admin/cv/`. Phone is read from `pass` (`local/personal_info/mobile_number`).

`./scripts/build-cv.sh --public-only` skips the private step — used by `dev.sh` and useful on machines without `pass`.

## Credit

Forked from [yujisatojr/react-portfolio-template](https://github.com/yujisatojr/react-portfolio-template) — the original layout/design template. Heavily customised since.
