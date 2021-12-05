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
    filename: 'script/[name].js',
  },
  // webpack --env production  
  mode: 'development',
  //代码调试
  devtool: 'inline-source-map',
}