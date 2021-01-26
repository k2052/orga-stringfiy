// Modelled on [[https://github.com/syntax-tree/hast-util-to-html/blob/master/lib/one.js]]
"use strict";

module.exports = serialize;
var one = require("./one");

var own = {}.hasOwnProperty;
// default handlers
var handlers = require("./handlers");

// Use [[https://github.com/Raynos/xtend][xtend]] here to combine handlers?
function serialize(config, tree) {
  config.handlers = { ...handlers, ...config.handlers };
  return one(config, tree);
}
