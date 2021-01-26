"use strict";
var one = require("../one");

module.exports = serializeText;

function serializeText(ctx, node, index, parent) {
  var headline = node.children
    .map((chld, idx) => one(ctx, chld, idx, node))
    .filter((txt) => txt !== "")
    .join(`\n`);
  var keyword = node.keyword ? `${node.keyword} ` : "";
  return `${"*".repeat(node.level)} ${keyword}${headline}\n`;
}
