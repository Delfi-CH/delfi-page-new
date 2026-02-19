#!/usr/bin/env bash
git fetch
git checkout main
git pull
git checkout pages
git pull
git rebase main pages
npm run build
cp -r ./build ./docs
git add docs/
git commit -m "Continuous Build"
git push