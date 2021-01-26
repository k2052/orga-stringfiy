module.exports = attacher;
var all = require("orga-stringify/lib/handlers/all");

function rawValue(ctx, node, index, parent) {
  return all(ctx, node);
}

function attacher(options) {
  this.Compiler.handlers = {
    ...this.Compiler.handlers,
    link: (ctx, node, index, parent) => node.desc,
    bold: all,
    italic: all,
    underline: all,
    strikeThrough: all,
    verbatim: all,
  };
}
