#!/usr/bin/env bash

rm -rf build node_modules
find docs -mindepth 1 ! -name 'CNAME' -exec rm -rf {} +
npm install
npm run build
cp -rf build/ docs/
git add .
git commit -m "Continious build"
git push