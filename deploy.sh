#!/usr/bin/env bash
git checkout pages
git stash
git pull --rebase
git rebase main pages
npm run build
cp -r ./build ./docs
git add docs/
git commit -m "Continuous Build"
git push