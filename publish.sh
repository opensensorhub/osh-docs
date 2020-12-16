npm run build

#git add .
#git commit
#git push

cd gh-pages
#git checkout apidocs #restore api docs as mkdocs may remove the folder
git add v2
git commit -m "Updated doc site"
git push
cd ..
