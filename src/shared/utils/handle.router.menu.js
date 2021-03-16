/*
 * @fileName: 处理菜单索引的工具
 * @Date: 2021-02-23 10:33:36
 * @Author: manyao.zhu
 */
import store from '../../pages/index/store'

/**
 * @description 处理菜单的索引（用于高亮）
 * @param {*} list 需要处理的菜单
 * @param {*} index 当前的索引
 */
export const handleMenuIndex = (list, index) => {
  if (list && list.length) {
    list.forEach( (item, i) => {
      if (index) {
        item.index = `${index}-${i+1}`
      } else {
        item.index = `${i+1}`
      }

      if (item.children) {
        handleMenuIndex(item.children, item.index)
      }
    })
  }
}

/**
 * @description 遍历当前路由，查看其是否需要更改当前高亮的索引
 * @param {*} list 需要遍历的菜单
 * @param {*} path 当前展示页面的路由
 */
export const settingMenuIndex = (list, path) => {
  if (list && list.length) {
    list.forEach( item => {
      if (item.route === path) {
        store.dispatch('setRouterConfig', {prop: 'menuIndex', value: item.index})
        store.dispatch('setRouterConfig', {prop: 'path', value: path})
      }

      if (item.children) {
        settingMenuIndex(item.children, path)
      }
    })
  }
}
