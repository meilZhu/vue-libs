/*
 * @fileName: 路由缓存工具，处理打开后的页面以及页面布局
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
  const routerConf = store.state.routerConfig
  const themeConfig = store.state.themeConfig

  if (to.path === 'login' || to.path === 'register' || to.path === '404') {
    store.dispatch('setThemeConfig', {prop: 'layoutComponent', value: 'layout'})
  } else {
    // 遍历更新 navmenu 数组的数据
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
    // 判断当前路由是否设置需要缓存
    if (to.meta.keepAlive) {
      // 判断是否满足 第一个tab键 或者 第一此添加至navMenu列表 或 是在tabMenu上点击
      if (!arr.length || (arr.length && arr.findIndex( t => {return t.path === to.path}) === -1) || routerConf.cache) {
        to.meta.cache = true
      } else {
        to.meta.cache = false
      }
    }
    
    // 根据布局类型选择布局组件ID
    if (themeConfig.layout === 'vertical') {
      store.dispatch('setThemeConfig', {prop: 'layoutComponent', value: 'header_menu_layout'})
    } else if (themeConfig.layout === 'horizontal') {
      store.dispatch('setThemeConfig', {prop: 'layoutComponent', value: 'header_layout'})
    }
  }

  store.dispatch('setNavMenu', arr)
  next()
})


// 设置当前路由，使菜单高亮
router.afterEach((to) => {
  // 当前擦弹的高亮， 以及头部nav的高亮
  const path = to.path
  settingMenuIndex(store.state.routers, path)

  // 清除缓存条件（这个可以在点击的跳转的时候添加）
  store.dispatch('setRouterConfig', {prop: 'cache', value: false})
})