#!/usr/bin/env bash
git fetch
git checkout main
git pull --rebase
git checkout pages
git pull --rebase
git rebase main pages
npm run build
cp -r ./build ./docs
git add docs/
git commit -m "Continuous Build"
git push