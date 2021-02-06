/*
 * @fileName: 
 * @Date: 2021-01-26 15:53:27
 * @Author: manyao.zhu
 */

export const MUTATION_MENU = {
  setCollapsed: 'setCollapsed',
  setRoute: 'setRoute'
}

export const themeMutations = {
  [MUTATION_MENU.setCollapsed]: (state, collapse) => {
    state.collapsed = collapse
  },

  [MUTATION_MENU.setRoute]: (state, route) => {
    state.route = route
  }
}