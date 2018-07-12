#!/usr/bin/env node

const browserify = require('browserify');
const build = require('./index');
const minifyStream = require('minify-stream');

browserify({
  ...build.defaultOpts,
  debug: false
}).transform('uglifyify', { global: true })
  .bundle()
  .pipe(minifyStream({ sourceMap: false }))
  .pipe(build.createDefaultStream());
