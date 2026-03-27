#!/usr/bin/env bash
set -euo pipefail

# Build both CV PDFs with phone number injected from `pass`.
# For recruiter copies only — the deploy script builds public CVs without phone.
#
# Requires: xelatex (texlive-xetex), Libertinus Serif font, pass

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CV_DIR="$REPO_ROOT/cv"
BUILD_DIR="$CV_DIR/build"

mkdir -p "$BUILD_DIR"

# Get phone number from pass
PHONE_NUM="$(pass show local/personal_info/mobile_number)" \
  || { echo "ERROR: could not read phone from pass"; exit 1; }
PHONE_SUB="\\\\enspace\\\\textcolor{accent}{·}\\\\enspace ${PHONE_NUM}"

for tex in "$CV_DIR"/*.tex; do
  name="$(basename "$tex" .tex)"
  tmp="$BUILD_DIR/${name}.tmp.tex"

  # Substitute the %%PHONE%% placeholder
  sed "s/%%PHONE%%/${PHONE_SUB}/g" "$tex" > "$tmp"

  echo "==> Building $name..."
  (cd "$BUILD_DIR" && xelatex -interaction=nonstopmode "$tmp") \
    || { echo "ERROR: failed to build $name"; exit 1; }

  # Rename the output PDF from the tmp name to the real name
  mv "$BUILD_DIR/${name}.tmp.pdf" "$BUILD_DIR/${name}.pdf" 2>/dev/null || true

  # Clean up tmp tex
  rm -f "$tmp" "$BUILD_DIR/${name}.tmp."*
done

echo ""
echo "Built PRIVATE CVs (with phone number)."
echo "PDFs in $BUILD_DIR/:"
ls -lh "$BUILD_DIR"/*.pdf
