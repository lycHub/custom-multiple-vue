const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
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
  entry: {
    home: './src/pages/home/index.js',
    hots: './src/pages/hots/index.js',
  },
  output: {
    // context: __dirname,
    path: join(__dirname, '../dist'),
    filename: "[name]/[name].[contenthash:8].js",
    publicPath: "/"
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },
  module: {
    noParse: /lodash/,
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              outputPath: 'assets/images'
            }
          }
        ]
      },
      {
        test: /\.(ttf|svg|eot|woff|woff2|otf)$/,
        use: 'url-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "首页",
      template: './src/pages/home/index.html',
      filename: "home/index.html",
      chunks: ['home'],
      meta
    }),
    new HtmlWebpackPlugin({
      title: "热歌榜",
      template: './src/pages/hots/index.html',
      filename: "hots/index.html",
      chunks: ['hots'],
      meta
    })
  ]
}
