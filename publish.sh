set -e # stop on error

npm run build

git add .
git commit -m "Updated v2 doc site"
git push

cd gh-pages
#git checkout apidocs #restore api docs as mkdocs may remove the folder
git add v2
git commit -m "Updated v2 doc site"
git push
cd ..
