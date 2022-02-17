/*
 * @fileName: 数字以三位用逗号分割
 * @Date: 2021-04-09 15:58:19
 * @Author: manyao.zhu
 */
import Vue from 'vue'

Vue.filter('division', function(val) {
  const str = String(val)
  if (str.includes('.')) {
    const index = str.indexOf('.') 
    const integer = str.slice(0, index)
    const decimal = str.slice(index)
    const division = integer.replace(/(\d)(?=(\d{3})+$)/g, "$1,")
    return  `${division}${decimal}`
  } else {
    return str.replace(/(\d)(?=(\d{3})+$)/g, "$1,")
  }
})