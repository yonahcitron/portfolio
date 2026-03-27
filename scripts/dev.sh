#!/usr/bin/env bash
set -euo pipefail

# Build the concise CV into public/ then start the React dev server.
# Run this instead of `npm start` so the CV download works locally.

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CV_DIR="$REPO_ROOT/cv"
BUILD_DIR="$CV_DIR/build"
PUBLIC_DIR="$REPO_ROOT/public"

CONCISE_TEX="yonah_citron_concise_cv.tex"
CONCISE_PDF="yonah_citron_concise_cv.pdf"
PUBLIC_CV_NAME="Yonah_Citron_CV.pdf"

echo "==> Building concise CV (public — no phone)..."
mkdir -p "$BUILD_DIR"

# Strip %%PHONE%% placeholder (public build — no phone number)
TMP_TEX="$BUILD_DIR/${CONCISE_TEX%.tex}.tmp.tex"
sed 's/%%PHONE%%//g' "$CV_DIR/$CONCISE_TEX" > "$TMP_TEX"

(cd "$BUILD_DIR" && xelatex -interaction=nonstopmode "$TMP_TEX") \
  || { echo "ERROR: xelatex failed"; exit 1; }

mv "$BUILD_DIR/${CONCISE_TEX%.tex}.tmp.pdf" "$BUILD_DIR/$CONCISE_PDF" 2>/dev/null || true
rm -f "$TMP_TEX" "$BUILD_DIR/${CONCISE_TEX%.tex}.tmp."*

cp "$BUILD_DIR/$CONCISE_PDF" "$PUBLIC_DIR/$PUBLIC_CV_NAME"
echo "==> CV ready at public/$PUBLIC_CV_NAME"

echo "==> Starting dev server..."
cd "$REPO_ROOT"
npm start
