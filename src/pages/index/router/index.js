/*
 * @fileName: 
 * @Date: 2021-01-26 11:10:59
 * @Author: manyao.zhu
 */
import VueRouter from 'vue-router'
import demoRouter from './demo'
import functionRouter from '~/pages/index/views/function/router'
console.log(functionRouter);

const Index = () => import(/* webpackChunkName: 'indexs' */ '../views/index/home.vue')

const router = new VueRouter({
  linkActiveClass: 'active-router',
  // mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Index,
      meta: {
        title: '首页',
      }
    },
    {
      path: '*',
      redirect: {
          name: 'home',
          component: Index
      }
    },
    ...demoRouter,
    ...functionRouter
  ]
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch((err) => err)
}

router.beforeEach((to, from, next) => {
  next()
})

export default router