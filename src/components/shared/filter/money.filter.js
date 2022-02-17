/*
 * @fileName: 金额的管道
 * @Date: 2021-04-09 15:12:11
 * @Author: manyao.zhu
 */

import Vue from 'vue'

Vue.filter('money', function(val) {
  return val.toFixed(2)
})