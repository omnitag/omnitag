#!/bin/sh
DIR="$( cd "$(dirname "$0")" ; pwd -P )"

webpack='npm run webpack --'

conf='{"maxChunks": 1}'

production(){
    releaseCheck="$1"
    echo "Production Mode";
    GO_EXIT=true
    npm run test && npm run build && CONFIG=$conf NODE_ENV=production ${webpack} && GO_EXIT=false
    if [ "xtrue" = "x$GO_EXIT" ]; then
      echo "Build failed."
      exit 1;
    fi

    if [ "xrelease" = "x$releaseCheck" ]; then
      echo "Release Mode";
      cp assets/tag.bundle.js ./tag.js
      cp assets/app.bundle.js ./tag-app.js
    fi
    cp assets/tag.bundle.js ./tag-beta.js
    cp assets/app.bundle.js ./tag-app-beta.js
    mkdir -p u
    find ./u -name '*.ini' | xargs rm -rf
    find ./src/user/* ! -path "*__tests__*" -print | xargs -I{} basename {} | xargs -I{} npm run btoa -- ./src/user/{} -o ./u/{}
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

killBy(){
    ps auxwwww | grep $1 | grep -v grep | awk '{print $2}' | xargs -I{} kill -9 {}
}

stop(){
    DIR="$( cd "$(dirname "$0")" ; pwd -P )"
    killBy ${DIR}/node_modules/.bin/babel 
    killBy webpack 
}

watch(){
    stop 
    npm run build:cjs -- --watch &
    npm run build:es -- --watch &
    sleep 10 
    CONFIG=$conf $webpack --watch &
}


case "$1" in
  watch)
    watch 
    ;;
  stop)
    stop 
    ;;
  p)
    production $2
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
