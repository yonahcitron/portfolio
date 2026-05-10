#!/usr/bin/env bash
set -euo pipefail

# Build CV PDFs from the single source cv/yonah_citron_cv.tex.
#
#   public  → public/Yonah_Citron_CV.pdf       (committed; CI ships it)
#   private → cv/build/yonah_citron_cv.pdf     (gitignored, has phone)
#           + ~/vault/files/documents/admin/cv/yonah_citron_cv.pdf  (mirror)
#
# The two builds differ only by the %%PHONE%% placeholder: public strips
# it; private substitutes the phone read from `pass`.
#
# By default builds BOTH — always run this before a commit-and-deploy so
# every variant of the CV is regenerated from the latest .tex source.
# Pass --public-only to skip the private build (used by dev.sh, or on
# machines without `pass`).
#
# Usage:
#   ./scripts/build-cv.sh                # build both
#   ./scripts/build-cv.sh --public-only  # public only (dev/CI-less hosts)

PUBLIC_ONLY=0
if [ "${1:-}" = "--public-only" ]; then
  PUBLIC_ONLY=1
fi

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CV_DIR="$REPO_ROOT/cv"
BUILD_DIR="$CV_DIR/build"
PUBLIC_DIR="$REPO_ROOT/public"
VAULT_CV_DIR="$HOME/vault/files/documents/admin/cv"

CV_TEX="yonah_citron_cv.tex"
CV_PDF="yonah_citron_cv.pdf"
PUBLIC_CV_NAME="Yonah_Citron_CV.pdf"

mkdir -p "$BUILD_DIR"

# Compile cv/yonah_citron_cv.tex with the given %%PHONE%% substitution
# and write the resulting PDF to $1 (absolute path).
compile_cv() {
  local label="$1"
  local sub="$2"
  local out_pdf="$3"

  echo "==> Building $label CV..."
  local tmp="$BUILD_DIR/${CV_TEX%.tex}.tmp.tex"
  sed "s|%%PHONE%%|${sub}|g" "$CV_DIR/$CV_TEX" > "$tmp"

  (cd "$BUILD_DIR" && xelatex -interaction=nonstopmode "$tmp") \
    || { echo "ERROR: xelatex failed for $label"; exit 1; }

  mv "$BUILD_DIR/${CV_TEX%.tex}.tmp.pdf" "$out_pdf"
  rm -f "$tmp" "$BUILD_DIR/${CV_TEX%.tex}.tmp."*
}

# --- public build (no phone) ---
PUBLIC_OUT="$BUILD_DIR/public_$CV_PDF"
compile_cv "public (no phone)" "" "$PUBLIC_OUT"
cp "$PUBLIC_OUT" "$PUBLIC_DIR/$PUBLIC_CV_NAME"
rm -f "$PUBLIC_OUT"
echo "    → $PUBLIC_DIR/$PUBLIC_CV_NAME"

if [ "$PUBLIC_ONLY" -eq 1 ]; then
  echo "==> Skipping private build (--public-only)."
  exit 0
fi

# --- private build (phone from pass) ---
mkdir -p "$VAULT_CV_DIR"
PHONE_NUM="$(pass show local/personal_info/mobile_number)" \
  || { echo "ERROR: could not read phone from pass"; exit 1; }
PHONE_SUB="\\\\enspace\\\\textcolor{accent}{·}\\\\enspace ${PHONE_NUM}"

compile_cv "private (with phone)" "$PHONE_SUB" "$BUILD_DIR/$CV_PDF"
cp "$BUILD_DIR/$CV_PDF" "$VAULT_CV_DIR/$CV_PDF"
echo "    → $BUILD_DIR/$CV_PDF"
echo "    → $VAULT_CV_DIR/$CV_PDF"

echo ""
echo "Done. Commit + push to deploy via CI."
