set -e # stop on error

COMMIT_MSG="Updated v2 doc site"
if [ -n "$1" ]; then
  COMMIT_MSG=$1
fi

npm run build

git add .
git commit -m "$COMMIT_MSG"
git push

cd gh-pages
#git checkout apidocs #restore api docs as mkdocs may remove the folder
git add v2
git commit -m "Updated v2 doc site"
git push
cd ..
