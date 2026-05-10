#!/usr/bin/env bash
set -euo pipefail

# Build the public CV into public/ then start the React dev server.
# Run this instead of `npm start` so the CV download works locally.

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
"$REPO_ROOT/scripts/build-cv.sh"

echo "==> Starting dev server..."
cd "$REPO_ROOT"
npm start
