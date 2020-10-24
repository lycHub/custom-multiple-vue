const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// console.log('node env', process.env.NODE_ENV);

const meta = {
  'apple-mobile-web-app-capable': 'yes',
  viewport: 'width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover',
  'apple-mobile-web-app-status-bar-style': 'block',
  'format-detection': 'telephone=no',
  'wap-font-scale': 'no',
  'Content-Security-Policy': { 'http-equiv': 'Content-Type', 'content': 'text/html; charset=utf-8' }
}


module.exports = {
  mode: 'development',
  entry: {
    home: './src/pages/home/index.js',
    singers: './src/pages/singers/index.js',
  },
  output: {
    // context: __dirname,
    path: join(__dirname, 'dist'),
    filename: "[name]/[name].[contenthash:8].js"
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },
  devServer: {
    port: 4200
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'px2rem-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    // new CopyWebpackPlugin({
    //   patterns: [{
    //     from: './public',
    //     to: join(__dirname, 'dist/public', '[name].[ext]')
    //   }]
    // }),
    new HtmlWebpackPlugin({
      title: "首页",
      template: './src/pages/home/index.html',
      filename: "home/index.html",
      chunks: ['home'],
      meta
    }),
    new HtmlWebpackPlugin({
      title: "歌手列表",
      template: './src/pages/singers/index.html',
      filename: "singers/index.html",
      chunks: ['singers'],
      meta
    }),
  ]
}
