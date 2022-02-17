/*
 * @fileName:
 * @Date: 2020-11-19 13:30:30
 * @Author: manyao.zhu
 */
// 读取./modules下的所有js文件并注册模块
const vuexModule = require.context('./modules', false, /\.js$/)
const module = {}

vuexModule.keys().forEach(fileName => {
  const moduleName = fileName.replace(/(\.\/|\.js)/g, '')
  module[moduleName] = {
    namespaced: true,
    ...vuexModule(fileName).default
  }
})

export default module