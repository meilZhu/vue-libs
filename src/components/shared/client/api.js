/*
 * @fileName: 请求接口的服务
 * @Date: 2021-04-08 10:50:39
 * @Author: manyao.zhu
 */

 import { Client } from '@styleofpicasso/client'

export default class fetchApi extends Client {
  constructor() {
    super()
  }
  
  // 获取字典值
  getDictionary(url, param) {
    return this.post(url, param)
  }
}