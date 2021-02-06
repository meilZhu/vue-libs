/*
 * @fileName: 
 * @Date: 2021-01-27 11:03:47
 * @Author: manyao.zhu
 */
import router from '../../router'
import store from '../../store'

// 设置当前路由，使菜单高亮
router.afterEach((to) => {
  const path = to.path
  store.dispatch('setRoute', path)
})