
mkdocs build
cd site
cp -p ../apidocs/index.html apidocs/index.html
git add .
git commit -m "Updated doc site"
git push
cd ..
