"use strict";

module.exports = serializeText;

function serializeText(ctx, node, index, parent) {
  return `[[${node.uri.raw}][${node.desc}]]`;
}
