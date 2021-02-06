/*
 * @fileName: 自定义指令的集合
 * @Date: 2021-01-29 14:03:27
 * @Author: manyao.zhu
 */
import clickoutside from './clickoutside'
import Vue from 'vue'

const install = function() {
  if (!Vue.prototype.$isServer) {
    Vue.use(clickoutside)
  }
}

export default {
  install,
}