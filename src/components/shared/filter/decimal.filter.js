/*
 * @fileName: 数字保留的小数位置
 * @Date: 2021-04-09 16:22:24
 * @Author: manyao.zhu
 */
import Vue from 'vue'

Vue.filter('decimal', function(val, num = 0){
  if (num === 0) {
    return val
  } else {
    return Number(val).toFixed(num)
  }
})