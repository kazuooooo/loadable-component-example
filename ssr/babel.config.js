// const loadableBabelPlugin = require("../../packages/babel-plugin");

function isWebTarget(caller) {
  return Boolean(caller && caller.target === "web");
}

function isWebpack(caller) {
  return Boolean(caller && caller.name === "babel-loader");
}

module.exports = api => {
  const web = api.caller(isWebTarget);
  const webpack = api.caller(isWebpack);
  console.log("web", web);
  console.log("webpack", webpack);
  const config = {
    presets: [
      "@babel/preset-react",
      [
        "@babel/preset-env",
        {
          useBuiltIns: web ? "entry" : undefined,
          corejs: web ? "core-js@3" : false,
          targets: !web ? { node: "current" } : undefined,
          modules: webpack ? false : "commonjs"
        }
      ]
    ],
    plugins: ["@babel/plugin-syntax-dynamic-import", "@loadable/babel-plugin"]
  };
  console.log("config", config);
  return config;
};
