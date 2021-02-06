/*
 * @fileName: 
 * @Date: 2021-01-26 11:11:09
 * @Author: manyao.zhu
 */

const Demo = () => import(/* webpackChunkName: 'demo'*/ '../views/demo/demo.vue')

export default [
  {
    path: '/demo',
    name: 'demo',
    data: {
      title: '案例'
    },
    component: Demo
  }
]