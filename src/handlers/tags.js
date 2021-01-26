var one = require("../one");

module.exports = serializeText;

function serializeText(ctx, node, index, parent) {
  const tags = node.tags.join(`:`);
  return ` :${tags}`;
}
