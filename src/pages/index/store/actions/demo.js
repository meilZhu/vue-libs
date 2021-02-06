/*
 * @fileName: 
 * @Date: 2021-01-26 10:41:00
 * @Author: manyao.zhu
 */

import { MUTATION_MENU } from '../mutations/demo'

export const demoActions = {
  // 设置demoId
  setDemoId: ({commit}, id) => {
    commit(MUTATION_MENU.setDemoId, id)
  }
}