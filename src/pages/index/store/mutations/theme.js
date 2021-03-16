/*
 * @fileName: 
 * @Date: 2021-01-26 15:53:27
 * @Author: manyao.zhu
 */

export const MUTATION_MENU = {
  setRouters: 'setRouters',
  setThemeConfig: 'setThemeConfig',
  setRouterConfig: 'setRouterConfig',
  setUserInfo: 'setUserInfo',
  setNavMenu: 'setNavMenu'
}

export const themeMutations = {

  [MUTATION_MENU.setRouters]: (state, array) => {
    state.routers = array
  },

  [MUTATION_MENU.setRouterConfig]: (state, config) => {
    state.routerConfig = config
  },
 
  [MUTATION_MENU.setThemeConfig]: (state, config) => {
    state.themeConfig = config
  },

  [MUTATION_MENU.setUserInfo]: (state, info) => {
    state.userInfo = info
  },

  [MUTATION_MENU.setNavMenu]: (state, list) => {
    state.navMenu = list
  }

}