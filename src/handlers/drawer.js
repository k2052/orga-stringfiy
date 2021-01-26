"use strict";

module.exports = serializeText;

function serializeText(ctx, node, index, parent) {
  return `:${node.name}:\n${node.value}:END:`;
}
