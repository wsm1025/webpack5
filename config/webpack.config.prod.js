const zip = require('css-minimizer-webpack-plugin');
const terser = require('terser-webpack-plugin');
module.exports = {
  // entry:{
  //   index:{
  //     import:'./src/index.js',
  //     dependOn:'shared'
  //   },
  //   another:{
  //     import:'./src/module.js',
  //     dependOn:'shared'
  //   },
  //   shared:"lodash"
  // },
  output: {
    //处理缓存，保证每一次更新都能正确加载
    filename: 'script/[name].[contenthash].js',
    // publicPath:'http://localhost:5500'
  },
  // webpack --env production  
  mode: 'production',
  optimization: {
    minimizer: [
      new zip(),
      new terser()
    ]
  },
  performance: {
    hints: false
  }
}