/*
 * @fileName: 请求样式的请求服务
 * @Date: 2021-04-28 22:33:57
 * @Author: manyao.zhu
 */

import http from './fetch';


export const getElementStyle = (version) => {
  return http.get(`https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`)
}