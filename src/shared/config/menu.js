/*
 * @fileName: 菜单配置信息
 * @Date: 2021-01-26 18:26:20
 * @Author: manyao.zhu
 */

// 路由的配置信息包含
/**
 *  icon  菜单的图标
 *  title  菜单的描述
 *  route  菜单的路由
 *  name  菜单的路由对应组件的name （这里是在路由中定义过的）
 *  query  菜单对应当前页面的参数
 *  params  菜单对饮当前页面的动态参数
 *  children  是否含有子集
 *  index  菜单对应的索引 (这里可以不写， 会统一写个方法去处理这个)
 */

export const MENU = [ 
  {
    icon: 'fa-print',
    title: '首页模块',
    route: '/home',
    name: 'home'
  },
  {
    icon: 'fa-database',
    title: '案例模块',
    children: [
      {
        icon: 'fa-shopping-basket',
        title: 'Form 表单',
        route: '/demo',
        name: 'demo',
        query: {id: '1111'},
        params: {page: '12345'},
      },
      {
        icon: 'fa-th-large',
        title: '3d应用',
        route: '/three-app',
        name: 'three-app',
        query: {id: 'three'}
      },
      {
        icon: 'fa-cubes',
        title: 'Vue学习案例',
        route: '/vue-demo',
        name: 'vue-demo'
      },
      {
        icon: 'fa-list',
        title: '基础表格',
        route: '/demo-base-table',
        name: 'base-table'
      },
      {
        icon: 'fa-pagelines',
        title: 'AntV G6',
        route: '/antv-g6',
        name: 'antv-g6'
      }
    ]
  },
  {
    icon: 'fa-cubes',
    title: '功能模块',
    children: [
      {
        icon: 'fa-file-code-o',
        title: '创建文件code',
        route: '/create-file-code',
        name: 'create-file-code'
      },
      {
        icon: 'fa-delicious',
        title: '拖拽放大弹窗',
        route: '/dialog',
        name: 'dialog'
      }
    ]
  }
]