/*
 * @fileName: vue项目的基本配置信息
 * @Date: 2021-01-26 09:03:13
 * @Author: manyao.zhu
 */
// const { Command } = require('commander')
// const program = new Command()
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 修改打包后js文件名
  configureWebpack: { // webpack 配置
    output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.js】
      filename: `js/[name].min.js`,
      library: 'BaseComponent', // 指定的就是你使用require时的模块名
      libraryTarget: 'umd',  // 指定输出格式
      umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
      // chunkFilename: `js/[name].${conf.version}.js`
    },
    // 修改打包后css文件名
    plugins: [
      new MiniCssExtractPlugin({
        filename: `css/[name].min.css`,
        // chunkFilename: `css/[name].${conf.version}.css`
      })
    ],
    module: {
      rules: [
        // {   // 这个在打包的时候用
        //   test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        //   loader: 'url-loader',
        //   options: {
        //     limit: 10000,
        //     // name: utils.assetsPath('fonts/[name].[ext]')
        //     name: path.posix.join('static', 'fonts/[name].[ext]')
        //   }
        // }
      ]
    }
  },
  devServer: {
    proxy: {
      '/swan': {
        target: 'https://swan-dev.nioint.com',
        changeOrigin: true,  // 开启代理
        pathRewrite: {
          '^/swan': ''
        }
      },
      '/api': {
        target: 'https://ndqs-firefly-test.nioint.com',
        changeOrigin: true
      }
    }
  },
  pages: {
    index: {
      // entry: process.env.NODE_ENV !== 'production' ? "src/pages/index/main.js" : 'src/pages/index/index.js',
      entry: 'src/pages/index/main.js',
      filename: 'index.html',
      title: 'VUE'
    },
    // subIndex: {
    //   entry: 'src/pages/subIndex/main.js',
    //   filename: 'subIndex.html',
    //   title: 'SUB VUE'
    // }
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('~', resolve('src'))
    config.resolve.alias.set('static', resolve('static'))
    // config.resolve.symlinks(true)  // 修护热替换失败
    // 对sass 文件的全局统一引入 【这样就不需要每个页面都去引入】  // 错误配置
    // config.module.rules('scss').oneOfs.store.forEach(item => {
    //   item.use('sass-resources-loader')
    //   .loader('sass-resources-loader')
    //   .options({
    //     resource: ['src/css/shared']
    //   }).end()
    // })
  },
}