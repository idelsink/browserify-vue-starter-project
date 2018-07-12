#!/usr/bin/env node

const browserify = require('browserify');
const watchify = require('watchify');
const fs = require('fs');

const ENTRIES = ['src/index.js'];
const OUTPUT = './bundle/bundle.js';

const defaultOpts = {
  entries: ENTRIES,
  extensions: ['vue']
}

module.exports = {
  defaultOpts: defaultOpts,
  createDefaultStream: () => { return fs.createWriteStream(OUTPUT)}
};
