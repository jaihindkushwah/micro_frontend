const { ModuleFederationPlugin } = require("webpack").container;
const Html_Webpack_plugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./CartIndex": "./src/index.js",
      },
    }),
    new Html_Webpack_plugin({
      template: "./public/index.html",
    }),
  ],
};
