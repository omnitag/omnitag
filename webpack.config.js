'use strict';

const webpack = require('reshow-app/webpack.client');

const entrys = {
  tag: './build/es/src/tag.js',
  tagDev: './build/es/src/tag_dev.js'
}

module.exports = webpack(__dirname, entrys);
