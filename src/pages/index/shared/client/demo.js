/*
 * @fileName: 
 * @Date: 2021-06-18 15:11:18
 * @Author: manyao.zhu
 */
import { Client } from '@styleofpicasso/client'

export default class DemoApi extends Client {
  constructor() {
    super('/swan')
  }
  
  // 获取历史数据
  getTableData(param) {
    return this.get('/v1/in/measurement/file/list', param)
  }

  
}