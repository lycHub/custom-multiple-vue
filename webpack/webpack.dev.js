const { join } = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    port: 4200,
    watchOptions: {
      ignored: [/node_modules/, join(__dirname, 'postcss.config.js')]
    },
    proxy: {
      "/api": {
        target: "https://interface.music.163.com",
        pathRewrite: {"^/api" : ""}
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  }
}
