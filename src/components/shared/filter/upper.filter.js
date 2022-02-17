/*
 * @fileName: 字符串大写的过滤器
 * @Date: 2021-04-09 23:51:57
 * @Author: manyao.zhu
 */

import Vue from 'vue' 

Vue.filter('upper', function(val) {
  const str = String(val)
  return str.toUpperCase()
})