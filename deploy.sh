set -eu

##################################
# Script to deploy to GitHub Page
##################################

# save current branch name to come back after
BRANCH=$(git rev-parse --abbrev-ref HEAD);
ORIGIN=$(git remote -v | sed -n 's/^deploy\s//p');

echo "$ORIGIN";

if [ -z "$ORIGIN" ]; then
  echo "register remote repository named 'deploy' for github pages";
  exit 1;
fi

# prepare temporary branch
git branch -D deploy;
git checkout -b deploy;
# build js file
yarn build:prod;
cp dist/bundle.min.js docs/bundle.min.js;
# git add and commit updated files
sed -i -e 's,/docs/bundle.min.js,,g' .gitignore
git add .gitignore docs/bundle.min.js;
git commit -m "commit by deploy script";
# deploy to GitHub Page
git push -f deploy deploy:master;
# back to master branch
git checkout -f $BRANCH;
