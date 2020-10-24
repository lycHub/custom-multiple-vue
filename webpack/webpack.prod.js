const { join } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/styles/[name][contenthash:8].css'
    }),
    new CopyPlugin({
      patterns: [{
        from: join(__dirname, '../public'),
        to: join(__dirname, '../dist/public', '[name].[ext]')
      }]
    })
  ]
}
