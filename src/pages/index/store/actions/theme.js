/*
 * @fileName: 
 * @Date: 2021-01-26 15:56:37
 * @Author: manyao.zhu
 */

import { MUTATION_MENU } from '../mutations/theme'

export const themeActions = {
  // 是否收缩
  setCollapsed: ({commit}, collapse) => {
    commit(MUTATION_MENU.setCollapsed, collapse)
  },
  // 设置路由
  setRoute: ({commit}, route) => {
    commit(MUTATION_MENU.setRoute, route)
  }
}