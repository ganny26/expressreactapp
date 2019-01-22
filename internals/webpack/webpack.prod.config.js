const webpack = require ("webpack");
const HtmlWebpackPlugin = require ("html-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path  = require('path')

let clientPath = path.join(__dirname,'../../dist/')
let appPath = path.join(__dirname,'../../src/client/index.js')
let templatePath = path.join(__dirname,'../templates/index.html')


module.exports = {
  mode: "production",
  entry: {
    app: ["@babel/polyfill",appPath]
  },
  output: {
    path:  clientPath,
    filename: "[name].[hash].bundle.js",
    pathinfo: false
  },
  devServer: {
    contentBase: clientPath,
    port: 9000
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
      inject:true,
      template: templatePath,
      filename: "index.html"
    }),
    new CleanWebpackPlugin(['dist'], {
      root:path.join(__dirname,'../../'),
      verbose: true
    })
  ]
};
