set -eu

##################################
# Script to deploy to GitHub Page
##################################

# save current branch name to come back after
WORKING_BRANCH=$(git rev-parse --abbrev-ref HEAD);
DEPLOY_BRANCH=deploy;
DEPLOY_ORIGIN=deploy;
ORIGIN_CHECK=$(git remote -v | sed -n 's/^deploy\s//p');

# if origin is not registered, exit
if [ -z "$ORIGIN_CHECK" ]; then
  echo "register remote repository named '$DEPLOY_ORIGIN' for github pages";
  exit 1;
fi

# prepare temporary branch
git branch -D $DEPLOY_BRANCH;
git checkout -b $DEPLOY_BRANCH;
# build js file
yarn build:prod;
cp dist/bundle.min.js docs/bundle.min.js;
# git add and commit updated files
sed -i -e 's,/docs/bundle.min.js,,g' .gitignore;
git add .gitignore docs/bundle.min.js;
git commit -m "commit by deploy script";
# deploy to GitHub Page
git push -f $DEPLOY_ORIGIN "$DEPLOY_BRANCH:master";
# back to master branch
git checkout -f $WORKING_BRANCH;
