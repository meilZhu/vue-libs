/*
 * @fileName: 
 * @Date: 2021-01-26 15:49:09
 * @Author: manyao.zhu
 */
import { Settings } from '../../../../shared/service/cache.service'
import { routerConfig, themeConfig, userInfo } from '../../../../shared/config/theme.config'
const settings = new Settings()

export const themeState = {
  routers: settings.getRouters(), // 菜单
  routerConfig: settings.getRouterConfig() || routerConfig, // 关于菜单的配置信息
  themeConfig: settings.getConfig() || themeConfig, // 项目的主题相关配置信息
  userInfo: settings.getUserInfo() || userInfo, // 用户信息
  navMenu: settings.getNavMenu() || [],  // 已经打开的页面的缓存路径
}