/*
 * @fileName: 
 * @Date: 2022-01-20 17:55:06
 * @Author: manyao.zhu
 */

const CreateFileCode = () => import(/*webpackChunkName: 'functions'*/ '../pages/create_file_code')
const Dialog = () => import(/*webpackChunkName: 'functions'*/ '../pages/dialog')
const RichText = () => import(/*webpackChunkName: 'function'*/ '../pages/rich_text')

export default [
  {
    path: '/create-file-code',
    name: 'create-file-code',
    component: CreateFileCode,
    meta: {
      title: '创建文件code',
    },
  },
  {
    path: '/dialog',
    name: 'dialog',
    component: Dialog,
    meta: {
      title: '拖拽放大弹窗'
    }
  },
  {
    path: '/rich-text',
    name: 'rich-text',
    component: RichText,
    meta: {
      title: '富文本编辑'
    }
  }
]