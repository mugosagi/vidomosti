#!/usr/bin/env sh

# abort on errors
set -e

# build
pnpm run build

# navigate into the build output directory
cd dist

git init
git checkout -b main
git add -A
git commit -m 'deploy: update'

git push -f git@github.com:mugosagi/vidomosti.git main:gh-pages

cd -
