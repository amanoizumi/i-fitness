set -e

npm run build

cd dist

echo > .nojekyll

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# https 佈署
git push -f https://github.com/amanoizumi/i-fitness.git main:gh-pages


cd -