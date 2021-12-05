const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const mini = require('mini-css-extract-plugin');
const zip = require('css-minimizer-webpack-plugin');
const terser = require('terser-webpack-plugin');
module.exports = (env) => {
  return {
    entry: {
      index: './src/index.js',
      another: './src/module.js'
    },
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
      path: path.resolve(__dirname, './wsm'),
      clean: true,
      //资源生成文件名以及其拓展名
      assetModuleFilename: 'img/[contenthash][ext]',
      // publicPath:'http://localhost:5500'
    },
    // webpack --env production  
    mode: env.production?'production':'development',
    //代码调试
    devtool: 'inline-source-map',
    plugins: [
      new htmlWebpackPlugin({
        template: './index.html',
        filename: 'wsm.html',
        inject: 'body'
      }),
      new mini({
        filename: 'wsm/[contenthash].css'
      })
    ],
    module: {
      rules: [
        {
          test: /\.png$/,
          type: 'asset/resource',
          //优先级比output更高
          generator: {
            filename: 'images/[contenthash][ext]'
          }
        },
        // assets的data URI base64的结果
        {
          test: /\.svg$/,
          type: 'asset/inline'
        },
        {
          test: /\.txt$/,
          type: 'asset/source'
        },
        // asset 自动选择是导出data URI还是生成单独的文件
        // {
        //   test:/\.txt$/,
        //   type:'asset',
        //   parser:{
        //     //设置大小
        //     dataUrlCondition:{
        //       maxSize:4*1024*1024
        //     }
        //   }
        // }
        {
          test: /\.(css|less)/,
          use: [mini.loader, 'css-loader', 'less-loader']
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                [
                  '@babel/plugin-transform-runtime'
                ]
              ]
            }
          }
        }
      ]
    },
    optimization: {
      minimizer: [
        new zip(),
        new terser()
      ],
      splitChunks: {
        //三方文件不需要多次缓存
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        },
        chunks: 'all'
      }
    }
  }
}