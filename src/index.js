var serialize = require("./serialize");

module.exports = stringify;

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

// Attach
function stringify(config) {
  this.Compiler = compiler;
  config = config || {};
  function compiler(tree) {
    if (config.toJSON) return JSON.stringify(tree, getCircularReplacer(), 2);
    // Use attached handlers.  Handlers passed in the config override.
    return serialize({ handlers: compiler.handlers, ...config }, tree);
  }
}
