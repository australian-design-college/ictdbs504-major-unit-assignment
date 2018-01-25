const path = require("path");
const webpack = require("webpack");

const portNumber = process.env.LISTEN_ON_PORT || 2001;

module.exports = {
  entry: ["webpack-dev-server/client?http://localhost:" + portNumber, "babel-polyfill", "./src/App.js"],
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, "src")],
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, "src")],
        use: [
          "style-loader",
          "css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [new webpack.NamedModulesPlugin()],
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".scss"],
    modules: [path.resolve(__dirname, "node_modules"), "node_modules"]
  },
  devServer: {
    contentBase: "./dist",
    hot: true,
    watchContentBase: true,
    port: portNumber
  }
};
