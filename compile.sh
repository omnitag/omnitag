#!/bin/sh
DIR="$( cd "$(dirname "$0")" ; pwd -P )"

webpack=${DIR}'/node_modules/.bin/webpack'

conf='{"maxChunks": 1}'

production(){
    echo "Production Mode";
    npm run test && npm run build 
    CONFIG=$conf NODE_ENV=production ${webpack} -p --optimize-minimize
    cp assets/tag.bundle.js ./tag.js
    cp assets/app.bundle.js ./tag-app.js
    mkdir -p u
    find ./u -name '*.ini' | xargs rm -rf
    find ./src/user/* ! -path "*__tests__*" -print | xargs -I{} basename {} | xargs -I{} btoa ./src/user/{} -o ./u/{}
}

analyzer(){
    echo "Analyzer Mode";
    npm run build
    CONFIG=$conf BUNDLE='{}' ${webpack} 
}

develop(){
    echo "Develop Mode";
    npm run build
    CONFIG=$conf ${webpack}
}

startServer(){
    echo "Start server";
    npm start
}


case "$1" in
  p)
    production
    ;;
  a)
    analyzer 
    ;;
  s)
    startServer 
    ;;
  *)
    develop
    exit
esac

exit $?
