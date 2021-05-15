#script to push build folder in release branch

npm run build
\cp -R ./build ../build

git fetch
git checkout -f release

#now we are in release folder and we need to push new build in this branch
\cp -r ../build/* ./
rm -r ../build
git add .
git commit -m "pushing release build"
git push origin release