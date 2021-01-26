"use strict";
var all = require("./all");

module.exports = serializeText;

function serializeText(ctx, node, index, parent) {
  var rows = node.children;
  var contents = [];
  var samplerow;
  var tblfm;
  rows.forEach((row) => {
    if (row.type === "table.row") {
      samplerow = row.children.map((cell) => all(ctx, cell));
      contents.push(["row", samplerow]);
    } else if (row.type === "table.separator") {
      contents.push(["separator"]);
    } else if (row.type === "keyword") {
      tblfm = row;
    } else {
      throw "Unexpected node in table: " + row.type;
    }
  });
  // What about misshapen tables?  Maybe render as a block??
  var dims = [...samplerow.keys()].map((i) =>
    Math.max(
      ...contents.map(([typ, row]) => (typ == "row" ? row[i].length : 0))
    )
  );
  var separator = `|${dims.map((dim) => "-".repeat(dim + 2)).join("+")}|`;
  var txt = "";
  contents.forEach(([typ, row]) => {
    if (typ === "separator") {
      txt += `${separator}\n`;
    } else {
      txt += `|${row
        .map((cell, i) => {
          return ` ${
            isNaN(cell) ? cell.padEnd(dims[i]) : cell.padStart(dims[i])
          } `;
        })
        .join("|")}|\n`;
    }
  });
  if (tblfm) {
    return txt + ctx.handlers.keyword(ctx, tblfm);
  }
  return txt;
}
