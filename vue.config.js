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
      .set('_PAGE_', resolve('src/pages'))
      .set('_CFG_', resolve('src/config'))
      .set('_VX_', resolve('src/vuex'))
      .set('_PLGN_', resolve('src/plugin'));
  },
  pages: {
    index: {
      // entry for the page
      entry: 'src/entry/index.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: '首頁'
    },
    webgame:{
      entry: 'src/entry/webgame.js',
      template: 'public/index.html',
      filename: 'webgame.html',
      title: '线上游戏'
    }
  }
}