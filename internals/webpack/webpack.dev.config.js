const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path')

let clientPath = path.join(__dirname, '../../dist/')
let appPath = path.join(__dirname, '../../src/client/index.js')
let templatePath = path.join(__dirname, '../templates/index.html')

console.log('path', path.join(__dirname, '../../dist/client'));

module.exports = {

  mode: "development",
  entry: {
    app: ["@babel/polyfill", appPath]
  },
  output: {
    path: clientPath,
    filename: "[name].[hash].bundle.js",
    pathinfo: false
  },
  devServer: {
    contentBase: clientPath,
    port: 9000,
    contentBase: clientPath,
    hot: true,
    port: 9000,
    inline: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        pathRewrite: { '^/api': '' },
        secure: false,
        changeOrigin: true
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: templatePath,
      filename: "index.html"
    })
  ]
};
