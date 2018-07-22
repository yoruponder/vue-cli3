// vue.config.js
const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
  // options...
  baseUrl: '/',
  productionSourceMap: false,
  devServer: {

  },
  chainWebpack: config => {
    config.resolve.alias
      .set('_ASET_', resolve('src/assets'))
      .set('_COMP_', resolve('src/components'))
      .set('_CSS_', resolve('src/assets/css'))
      .set('_IMG_', resolve('src/assets/image'))
      .set('_PLGN_', resolve('src/assets/plugin'));
  }
}