const { merge } = require('webpack-merge');
const base = require('./webpack.base');
const dev = require('./webpack.dev');
const prod = require('./webpack.prod');


module.exports = env => {
  const isProd = env.production === true;
  if (isProd) {
    return merge(base, prod);
  }
  return merge(base, dev);
}
