/*
 * @fileName: 
 * @Date: 2021-01-27 11:03:47
 * @Author: manyao.zhu
 */
import router from '../../router'
import { settingMenuIndex } from '../../../../shared/utils/handle.router.menu'
import store from '../../store'

// 监听路由来判断其是否需要使用缓存
router.beforeEach((to, from, next) => {
  // 对页面已打开的列表的处理
  const obj = {}
  obj.path = to.path
  obj.query = to.query
  obj.params = to.params
  obj.title = to.meta.title
  const arr = store.state.navMenu
  if (!arr.length) {
    arr.push(obj)
  } else {
    const index = arr.findIndex( t => {
      return t.path === to.path
    })
    if (index !== -1) {
      arr.splice(index, 1, obj)
    } else {
      arr.push(obj)
    }
  }
  store.dispatch('setNavMenu', arr)
  next()
})

// 设置当前路由，使菜单高亮
router.afterEach((to) => {
  // 高亮
  const path = to.path
  settingMenuIndex(store.state.routers, path)

  // 清除缓存条件（这个可以在点击的跳转的时候添加）
  store.dispatch('setRouterConfig', {prop: 'cache', value: false})
})