/*
 * @fileName: 可以拖拽移动位置并支持拖拽放大缩小的弹窗
 * @Date: 2022-01-30 09:26:45
 * @Author: manyao.zhu
 */
import MyDialog from './my-dialog.vue' 

MyDialog.install = Vue => Vue.component(MyDialog.name, MyDialog)

export default MyDialog