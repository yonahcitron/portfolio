#!/usr/bin/env bash
set -euo pipefail

# Build the concise CV (public — no phone), copy it to public/ as the
# downloadable artifact, then build and deploy the React site to GitHub
# Pages via gh-pages.
#
# Usage: ./scripts/deploy.sh
# Requires: xelatex, npm, gh-pages (npm dep)

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CV_DIR="$REPO_ROOT/cv"
BUILD_DIR="$CV_DIR/build"
PUBLIC_DIR="$REPO_ROOT/public"

CONCISE_TEX="yonah_citron_concise_cv.tex"
CONCISE_PDF="yonah_citron_concise_cv.pdf"
PUBLIC_CV_NAME="Yonah_Citron_CV.pdf"

# 0) Safety: refuse to deploy with uncommitted changes
cd "$REPO_ROOT"
if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "ERROR: You have uncommitted changes. Commit or stash before deploying."
  git status --short
  exit 1
fi

# 1) Build concise CV (public build — phone number stripped)
echo "==> Building concise CV (public — no phone)..."
mkdir -p "$BUILD_DIR"

TMP_TEX="$BUILD_DIR/${CONCISE_TEX%.tex}.tmp.tex"
sed 's/%%PHONE%%//g' "$CV_DIR/$CONCISE_TEX" > "$TMP_TEX"

(cd "$BUILD_DIR" && xelatex -interaction=nonstopmode "$TMP_TEX") \
  || { echo "ERROR: xelatex failed"; exit 1; }

mv "$BUILD_DIR/${CONCISE_TEX%.tex}.tmp.pdf" "$BUILD_DIR/$CONCISE_PDF" 2>/dev/null || true
rm -f "$TMP_TEX" "$BUILD_DIR/${CONCISE_TEX%.tex}.tmp."*

# 2) Copy to public/ so CRA includes it in the build
cp "$BUILD_DIR/$CONCISE_PDF" "$PUBLIC_DIR/$PUBLIC_CV_NAME"
echo "==> Copied CV to public/$PUBLIC_CV_NAME"

# 3) Build and deploy React app
echo "==> Building and deploying site..."
cd "$REPO_ROOT"
npm run deploy

echo ""
echo "Done. Site deployed to GitHub Pages with latest CV."
