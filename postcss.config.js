const pxtorem = require('postcss-pxtorem');
module.exports = {
  plugins: [
    require('autoprefixer'), // 一定要指定 browserslist
    pxtorem({
      rootValue: 75,
      propList: ['*']
      // unitPrecision: 6
    })
  ]
}
