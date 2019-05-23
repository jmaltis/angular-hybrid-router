LIB_TO_PUSH=$1
cd dist && cd $LIB_TO_PUSH && npm pack --prod
npm publish --registry http://repository.rnd.amadeus.net/repository/api/npm/npm-nonsw/
CURRENT_VERSION=$(node -p "require('./package.json').version")
echo $CURRENT_VERSION
cd ../../
git fetch
git checkout master
git status
# filter out sf/ changes
git add projects/$LIB_TO_PUSH/package.json
git commit -m $(echo $LIB_TO_PUSH)$(echo $CURRENT_VERSION)
git push origin master --tags
