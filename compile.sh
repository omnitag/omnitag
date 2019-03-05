#!/bin/sh


conf='{"resetVendor":[]}'

production(){
    echo "Production Mode";
    npm run test 
    CONFIG=$conf NODE_ENV=production webpack -p --optimize-minimize
    cp assets/tag.bundle.js ./tag.js
    mkdir -p u
    find ./u -name '*.ini' | xargs rm -rf
    find ./src/user/* -print | xargs -I{} basename {} | xargs -I{} btoa ./src/user/{} -o ./u/{}
}

analyzer(){
    echo "Analyzer Mode";
    npm run build
    CONFIG=$conf BUNDLE='{}' webpack
}

develop(){
    echo "Develop Mode";
    npm run build
    CONFIG=$conf webpack
}

startServer(){
    echo "Start server";
    node_modules/.bin/ws -p 7000 --http2 --https -v 
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
