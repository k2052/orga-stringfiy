"use strict";

module.exports = serializeText;
var toOrgDate = require("./dateConverter");

function serializeText(ctx, node, index, parent) {
  var date = node.date;
  var end = node.end;
  return end ? `<${toOrgDate(date)}>--<${toOrgDate(end)}>` : toOrgDate(date);
}
