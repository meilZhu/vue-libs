/*
 * @fileName: 
 * @Date: 2021-01-26 11:10:59
 * @Author: manyao.zhu
 */
import VueRouter from 'vue-router'
import demoRouter from './demo'

const Index = () => import(/* webpackChunkName: 'index */ '../views/index/home.vue')

const router = new VueRouter({
  linkActiveClass: 'active-router',
  // mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Index
    },
    {
      path: '*',
      redirect: {
          name: 'home',
          component: Index
      }
    },
    ...demoRouter
  ]
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch((err) => err)
}

export default router