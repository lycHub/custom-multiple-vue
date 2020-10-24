const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

// console.log('node env', process.env.NODE_ENV);

const meta = {
  viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
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
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
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
