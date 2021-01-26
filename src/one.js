// Modelled on [[https://github.com/syntax-tree/hast-util-to-html/blob/master/lib/one.js]]
"use strict";

module.exports = one;

var own = {}.hasOwnProperty;

function one(ctx, node, index, parent) {
  var handlers = ctx.handlers;
  var type = node && node.type;
  if (!type) {
    throw new Error("Expected node, not `" + node + "`");
  }

  if (!own.call(handlers, type)) {
    throw new Error("Cannot compile unknown node `" + type + "`");
  }
  return handlers[type](ctx, node, index, parent);
}
