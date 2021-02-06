/*
 * @fileName: 
 * @Date: 2021-01-26 10:40:50
 * @Author: manyao.zhu
 */

export const MUTATION_MENU= {
  setDemoId: 'setDemoId'
}

export const demoMutations = {
  // 设置demoId
  [MUTATION_MENU.setDemoId]: (state, id) => {
    state.demoId = id
  }
}