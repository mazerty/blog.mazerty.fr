#!/bin/bash -ex

PROJECT=blog.mazerty.fr

cd /tmp/ || exit
git clone git@github.com:mazerty/$PROJECT.git
cd $PROJECT/ || exit
git branch docs
git checkout docs
git branch -a | grep -w remotes/origin/docs && git branch -u origin/docs
npm install
npm run build
mv dist/ docs
touch docs/.nojekyll
echo $PROJECT >docs/CNAME
git add .
git commit -m "-- published to github pages"
git push -f origin docs
cd ..
rm -rf ${PROJECT:?}/
