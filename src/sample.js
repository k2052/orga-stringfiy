fn =
  "/Users/douglasmennella/ObjectiveC/org-mode-syntax-cheat-sheet/cheat_sheet_org.txt";
//fn = "/Users/douglasmennella/org/general.org"
//fn = "/tmp/test2.org";
var orga = require("orga");
var visit = require("unist-util-visit");
var fs = require("fs");

fs.readFile(fn, (err, data) => {
  var tree = orga.parse(String(data));
  //console.log(JSON.stringify(tree, getCircularReplacer(), 2));
  visit(tree, undefined, function (node) {
    console.log(["type", node.type, typeof node.type]);
    //    node.parent = undefined;
  });
});

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};
