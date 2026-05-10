#!/usr/bin/env bash
set -euo pipefail

# Build the public CV (phone stripped) and place it at
# public/Yonah_Citron_CV.pdf so it ships with the React build.
#
# This PDF is committed to git. Re-run this script before any commit
# that should change the deployed CV — the GitHub Actions workflow
# does NOT run xelatex, it just copies whatever is in public/ into
# the deployed bundle.
#
# Usage: ./scripts/build-cv.sh

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CV_DIR="$REPO_ROOT/cv"
BUILD_DIR="$CV_DIR/build"
PUBLIC_DIR="$REPO_ROOT/public"

CV_TEX="yonah_citron_cv.tex"
CV_PDF="yonah_citron_cv.pdf"
PUBLIC_CV_NAME="Yonah_Citron_CV.pdf"

echo "==> Building public CV (no phone)..."
mkdir -p "$BUILD_DIR"

# Strip %%PHONE%% placeholder (public build — no phone number)
TMP_TEX="$BUILD_DIR/${CV_TEX%.tex}.tmp.tex"
sed 's/%%PHONE%%//g' "$CV_DIR/$CV_TEX" > "$TMP_TEX"

(cd "$BUILD_DIR" && xelatex -interaction=nonstopmode "$TMP_TEX") \
  || { echo "ERROR: xelatex failed"; exit 1; }

mv "$BUILD_DIR/${CV_TEX%.tex}.tmp.pdf" "$BUILD_DIR/$CV_PDF" 2>/dev/null || true
rm -f "$TMP_TEX" "$BUILD_DIR/${CV_TEX%.tex}.tmp."*

cp "$BUILD_DIR/$CV_PDF" "$PUBLIC_DIR/$PUBLIC_CV_NAME"
echo "==> CV ready at public/$PUBLIC_CV_NAME"
echo "    Commit + push to deploy via CI."
