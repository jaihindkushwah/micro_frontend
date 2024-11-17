const Html_Webpack_plugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
module.exports = {
  mode: "development",
  devServer: {
    port: 8083,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        "./AuthIndex": "./src/index.js",
      },
    }),
    new Html_Webpack_plugin({
      template: "./public/index.html",
    }),
  ],
  //   module: {
  //     rules: [
  //       {
  //         test: /\.css$/i,
  //         use: ["style-loader", "css-loader"],
  //       },
  //     ],
  //   },
};
