/*
 * @fileName: 基础表单的注册事件
 * @Date: 2021-03-22 10:57:29
 * @Author: manyao.zhu
 */
import MyFormItem from './my-form-item';

MyFormItem.install = Vue => Vue.component(MyFormItem.name, MyFormItem)

export default MyFormItem