/*
 * @fileName: 页面左右分布可以拖拽调整大小组件的注册事件
 * @Date: 2021-03-22 10:57:29
 * @Author: manyao.zhu
 */
import MyDrag from './my-drag';

MyDrag.install = Vue => Vue.component(MyDrag.name, MyDrag)

export default MyDrag