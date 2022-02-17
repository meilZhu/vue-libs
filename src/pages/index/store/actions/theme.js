/*
 * @fileName: 
 * @Date: 2021-01-26 15:56:37
 * @Author: manyao.zhu
 */

import { Settings } from '../../../../shared/service/cache.service'
const settings = new Settings()

import { MUTATION_MENU } from '../mutations/theme'

export const themeActions = {
  // 设置菜单
  setRouters: ({commit}, routers) => {
    commit(MUTATION_MENU.setRouters, routers)
    settings.setRouters(routers)
  },

  // 设置主题相关配置
  setThemeConfig: ({commit}, params) => {
    settings.setConfig(params.prop, params.value)
    const config = settings.getConfig()
    commit(MUTATION_MENU.setThemeConfig, config)
  },

  // 清除项目主题的配置
  removeThemeConfig: ({commit}) => {
    settings.removeConfig()
    commit(MUTATION_MENU.setThemeConfig, {})
  },

  // 设置菜单的配置信息
  setRouterConfig: ({commit}, params) => {
    settings.setRouterConfig(params.prop, params.value)
    const config = settings.getRouterConfig()
    commit(MUTATION_MENU.setRouterConfig, config)
  },
  // 清除菜单的相关配置信息
  remvoeRouterConfig: ({commit}) => {
    settings.removeRouterConfig()
    commit(MUTATION_MENU.setRouterConfig, {})
  },

  // 设置用户信息
  setUserInfo: ({commit}, info) => {
    settings.setUserInfo(info)
    commit(MUTATION_MENU.setUserInfo, info)
  },

  // 设置已打开页面的列表
  setNavMenu: ({commit}, list) => {
    settings.setNavMenu(list)
    commit(MUTATION_MENU.setNavMenu, list)
  }
}