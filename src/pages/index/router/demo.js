/*
 * @fileName: 
 * @Date: 2021-01-26 11:11:09
 * @Author: manyao.zhu
 */

const Demo = () => import(/* webpackChunkName: 'demo'*/ '../views/demo/demo.vue')
const Application = () => import(/* webpackChunkName: 'demo */ '../views/demo/3d-application.vue')

export default [
  {
    path: '/demo',
    name: 'demo',
    component: Demo,
    meta: {
      title: '案例',
      keepAlive: true
    },
  },
  {
    path: '/three-app',
    name: 'three-app',
    component: Application,
    meta: {
      title: '3d应用'
    }
  }
]