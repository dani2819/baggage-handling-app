const { addLessLoader, override } = require("customize-cra");

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    strictMath: true,
    noIeCompat: true,
    strictMath: false,
    localIdentName: "[local]--[hash:base64:5]" // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
  })
);
