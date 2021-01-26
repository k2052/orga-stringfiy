"use strict";
var all = require("./all");

module.exports = serializeText;

function serializeText(ctx, node, index, parent) {
  var newctxt =
    node.type === "list"
      ? {
          ...ctx,
          listLevel: (ctx.listLevel === undefined ? -1 : ctx.listLevel) + 1,
        }
      : { ...ctx };
  var orig = all(newctxt, node);
  var inner = orig ? orig.replace(/\r\n|\n$/, "").split(/\r\n|\n/) : [];
  var indent;
  var content;
  if (node.type == "list") {
    indent = "";
    var ret = inner.length > 0 ? inner.join(`\n${indent}`) + "\n" : "";
    return ret;
  } else {
    content = node.content;
    if (node.tag) content = `${node.tag} :: ${content}`;
    indent = " ".repeat(node.indent);
    if (inner.length > 0) {
      inner = indent + inner.join(`\n${indent}`) + "\n";
    } else inner = "";
  }
  var checked =
    node.checked === true ? "[X] " : node.checked == false ? "[ ] " : "";

  var bullet = node.ordered ? `${index + 1}.` : "-";
  return `${indent}${bullet} ${checked}${content}${inner}`;
}
