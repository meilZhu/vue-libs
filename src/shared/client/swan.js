/*
 * @fileName: 
 * @Date: 2021-03-15 09:32:09
 * @Author: manyao.zhu
 */

import { Client } from '@styleofpicasso/client';

export default class SwanApi extends Client {
  constructor() {
    super('/swan', {dataType: 'json'})
  }
  
  // 获取prd列表
  searchPart(param) {
    return this.post('/v1/in/cad_bom/search_parts', param)
  } 

  // 通过prd获取模型数据
  getModelByPrd(param) {
    return this.post('/v1/in/cad_bom/search_bom', param)
  }
}