#!/bin/bash
set -eux -o pipefail
lein clean
rm -Rf resources/public/js/
lein cljsbuild once prod
cd resources/public
git init
git add . -f
git commit -m "Deploy to GitHub Pages"
git push --force --quiet "git@github.com:palfrey/clostridium.git" master:gh-pages
rm -fr resources/public/.git