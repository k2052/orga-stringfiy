"use strict";
var all = require("./all");

module.exports = serializeText;

function serializeText(ctx, node, index, parent) {
  var orig = all(ctx, node);
  var params = node.params.join(",");
  params = params.length ? ` ${params}` : "";
  var indent = ctx.listLevel !== undefined ? " " : "";
  return `${indent}#+BEGIN_${node.name}${params}\n${orig}${indent}#+END_${node.name}\n`;
}
