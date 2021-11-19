const { list, targets } = require("core-js-compat")({
  targets: "ie >= 10",
});

console.log(list, targets);

require("core-js-builder")({
  targets: ">0.5%",
  filename: "./0.5%.bundle.js",
})
  .then((code) => {
    console.log(code);
  })
  .catch(console.error);
