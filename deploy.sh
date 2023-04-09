#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# initializes a new Git repository, commits the built app
git init
git add -A
git commit -m 'Deploy'

# deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Minh-DN/cashboard.git main:gh-pages

cd -