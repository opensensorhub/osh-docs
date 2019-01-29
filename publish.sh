mkdocs build

git add .
git commit
git push

cd site
git checkout apidocs #restore api docs as mkdocs may remove the folder
git add .
git commit -m "Updated doc site"
git push
cd ..
