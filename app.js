require('babel-core/register');
require('babel-polyfill');
require("babel-core").transform("code", {
    presets: ["es2017"]
});
require('./api/');