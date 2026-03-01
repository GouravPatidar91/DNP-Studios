#!/bin/bash
# Push this project to https://github.com/legend12309/dynamic
# Run in Git Bash: bash push-to-github.sh

cd "$(dirname "$0")"

echo "Staging all changes..."
git add -A

echo "Committing..."
git commit -m "Update landing page and assets" || true

echo "Pushing to origin main..."
git push -u origin main

echo "Done."
