module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    ["import", {
      "libraryName": "lodash",
      "libraryDirectory": "",
      "camel2DashComponentName": false
    }],
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
