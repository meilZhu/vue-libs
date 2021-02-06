/*
 * @fileName: 菜单配置信息
 * @Date: 2021-01-26 18:26:20
 * @Author: manyao.zhu
 */

export const MENU = [
  {
  class: 'fa-database',
  title: '测色数据',
  route: '/a',
  name: 'demo',
  index: '1',
  query: {id: '1111'},
  params: {page: 1},
  children: [{
    class: 'fa-database',
    title: '测色数据',
    route: '/demo',
    name: 'demo',
    index: '1-1',
    query: {id: '1111'},
  }, {
    class: 'fa-database',
    title: '测色s',
    route: '/demo',
    name: 'demo',
    index: '1-1',
    query: {id: '1111'},
    children: [{
      class: 'fa-database',
      title: '测色sss数据',
      route: '/demo',
      name: 'demo',
      index: '1-1',
      query: {id: '1111'},
    }]
  }]
  }, {
  class: 'fa-print',
  title: '测色数据',
  route: '/b',
  name: 'demo',
  query: {id: '1111'},
  params: {page: 1},
  index: '2',
  children: [{
    class: 'fa-print',
    title: '测色数据',
    route: '/c',
    name: 'demo',
    index: '2-1',
    query: {id: '1111'},
  },{
    class: 'fa-print',
    title: '测色数据',
    route: '/c',
    name: 'demo',
    index: '2-1',
    query: {id: '1111'},
  },{
    class: 'fa-print',
    title: '测色数据',
    route: '/c',
    name: 'demo',
    index: '2-1',
    query: {id: '1111'},
  },{
    class: 'fa-print',
    title: '测色数据',
    route: '/c',
    name: 'demo',
    index: '2-1',
    query: {id: '1111'},
  },{
    class: 'fa-print',
    title: '测色数据',
    route: '/c',
    name: 'demo',
    index: '2-1',
    query: {id: '1111'},
  },{
    class: 'fa-print',
    title: '测色数据',
    route: '/c',
    name: 'demo',
    index: '2-1',
    query: {id: '1111'},
  },{
    class: 'fa-print',
    title: '测色数据',
    route: '/c',
    name: 'demo',
    index: '2-1',
    query: {id: '1111'},
  },{
    class: 'fa-print',
    title: '测色数据',
    route: '/c',
    name: 'demo',
    index: '2-1',
    query: {id: '1111'},
  }]
  }, {
    class: 'fa-print',
    title: '测色数据',
    route: '/home',
    name: 'demo',
    index: '3',
    query: {id: '1111'},
  }]