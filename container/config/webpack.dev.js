const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const { ModuleFederationPlugin } = require("webpack").container;
const Html_Webpack_plugin = require("html-webpack-plugin");
const packageJson = require("../package.json");
const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        products: "products@http://localhost:8081/remoteEntry.js",
        // cart: "cart@http://localhost:8082/remoteEntry.js",
      },
      shared: packageJson.dependencies,
      // shared: ["react", "react-dom", "react-router-dom"],
    }),
    new Html_Webpack_plugin({
      template: "./public/index.html",
    }),
  ],
};
module.exports = merge(commonConfig, devConfig);
