/*
 * @fileName:字符串小写的过滤器
 * @Date: 2021-04-09 23:52:05
 * @Author: manyao.zhu
 */

import Vue from 'vue' 

Vue.filter('lower', function(val) {
  const str = String(val)
  return str.toLowerCase()
})
