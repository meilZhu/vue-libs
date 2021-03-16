/*
 * @fileName: vue项目的基本配置信息
 * @Date: 2021-01-26 09:03:13
 * @Author: manyao.zhu
 */
const { Command } = require('commander')
const program = new Command()

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

console.log(program.config)

module.exports = {
  devServer: {
    proxy: {
      '/swan': {
        target: 'https://swan-dev.nioint.com',
        changeOrigin: true,
      },
      '/api': {
        target: 'https://ndqs-firefly-test.nioint.com',
        changeOrigin: true
      }
    }
  },
  pages: {
    index: {
      entry: "src/pages/index/main.js",
      filename: 'index.html',
      title: 'VUE'
    },
    subIndex: {
      entry: 'src/pages/subIndex/main.js',
      filename: 'subIndex.html',
      title: 'SUB VUE'
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('~', resolve('src'))
    config.resolve.alias.set('static', resolve('static'))
    // config.resolve.symlinks(true)  // 修护热替换失败
  },
}