#!/usr/bin/env bash

rm -rf docs/_app docs/about docs/contact docs/projects docs/.nojekyll docs/hamburger.png docs/indes.html docs/robots.txt
npm run build
git add .
git commit -m "Continious build"
git push