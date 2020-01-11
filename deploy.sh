# script to deploy to GitHub Page
yarn
git branch -D deploy;
git checkout -b deploy;
yarn build:prod;
cp dist/bundle.min.js docs/bundle.min.js;
git add docs/bundle.min.js;
git commit -m "update bundle.js";
git push -f deploy deploy:master;
