const { join } = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    port: 4200,
    watchOptions: {
      ignored: [/node_modules/, join(__dirname, 'postcss.config.js')]
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
