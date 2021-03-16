/*
 * @fileName: 本地缓存的站处理方法
 * @Date: 2020-11-19 11:42:51
 * @Author: manyao.zhu
 */
import { themeConfig, routerConfig } from '../config/theme.config'

/**
 * @description 存储数据
 * @param {*} name 缓存的属性
 * @param {*} val 缓存的值
 * @param {*} local 是否为本地缓存，true:localStorage , false: sessionStorage
 */

export const setStore = (name, val, local) => {
  if (local) {
    localStorage.setItem(name, val)
  } else {
    sessionStorage.setItem(name, val)
  }
}
// 获取缓存
export const getStore = (name, local) => {
  if (local) {
    return localStorage.getItem(name)
  } else {
    return sessionStorage.getItem(name)
  }
}
// 删除缓存
export const removeStore = (name, local) => {
  if (local) {
    localStorage.removeItem(name)
  } else {
    sessionStorage.removeItem(name)
  }
}

// 设定缓存的值
export class Settings {
  routers = 'ROUTERS'  // 项目的菜单路由
  config = 'CONFIG' // 页面相关配置信息
  routerConfig = 'ROUTERCONFIG' // 菜单配置的信息 
  userInfo = 'USERINFO' // 用户信息
  navMenu = 'NAVMENU'  // 打开页面列表

  // 菜单的配置信息
  setRouters = (val) => {
    setStore(this.routers, JSON.stringify(val), true)
  }
  getRouters = () => {
    return JSON.parse(getStore(this.routers, true))
  }
  removeRouters = () => {
    removeStore(this.routers, true)
  }

  // 页面的相关配置
  setConfig = (prop, val) => {
    const config = JSON.parse(getStore(this.config, true)) || themeConfig
    config[prop] = val
    setStore(this.config, JSON.stringify(config), true)
  }

  getConfig = () => {
    return JSON.parse(getStore(this.config, true))
  }

  removeConfig = () => {
    removeStore(this.config, true)
  }

  // 页面菜单的配置
  setRouterConfig = (prop, val) => {
    const config = JSON.parse(getStore(this.routerConfig, true)) || routerConfig
    config[prop] = val
    setStore(this.routerConfig, JSON.stringify(config), true)
  }

  getRouterConfig = () => {
    return JSON.parse(getStore(this.routerConfig, true))
  }

  removeRouterConfig = () => {
    removeStore(this.routerConfig, true)
  }

  // 用户信息的储存
  setUserInfo = (val) => {
    setStore(this.userInfo, JSON.stringify(val), true)
  }

  getUserInfo = () => {
    return JSON.parse(getStore(this.userInfo, true))
  }

  removeUserInfo = () => {
    removeStore(this.userInfo, true)
  }

  // 已经打开页面的列表
  setNavMenu = (list) => {
    setStore(this.navMenu, JSON.stringify(list), true)
  }

  getNavMenu = () => {
    return JSON.parse(getStore(this.navMenu, true))
  }

  removeNavMenu = () => {
    removeStore(this.navMenu, true)
  }
}
