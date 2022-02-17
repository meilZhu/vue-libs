/*
 * @fileName: 
 * @Date: 2021-01-26 11:11:09
 * @Author: manyao.zhu
 */

const Demo = () => import(/* webpackChunkName: 'demo'*/ '../views/demo/pages/demo.vue')
const Application = () => import(/* webpackChunkName: 'demo' */ '../views/demo/pages/3d-application.vue')
const VueDemo = () => import(/* webpackChunkName: 'demo' */ '../views/demo/pages/vue_demo.vue')
const BaseTable = () => import(/* webpackChunkName: 'demo */ '../views/demo/pages/base_table')
const AntvG6 = () => import(/* webpackChunkName: 'demo' */ '../views/demo/pages/antv-g6')

export default [
  {
    path: '/demo/:page',
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
  },
  {
    path: '/vue-demo',
    name: 'vue-demo',
    component: VueDemo,
    meta: {
      title: 'vue学习案例'
    }
  },
  {
    path:'/demo-base-table',
    name: 'base-table',
    component: BaseTable,
    meta: {
      title: '基础表格'
    }
  },
  {
    path: '/antv-g6',
    name: 'antv-g6',
    component: AntvG6,
    meta: {
      title: 'AntV G6'
    }
  }
]