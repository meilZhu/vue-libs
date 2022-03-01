/*
 * @fileName: 富文本组件的注册
 * @Date: 2022-02-25 10:51:14
 * @Author: manyao.zhu
 */
import MyRichText from './my-rich-text'

MyRichText.install = Vue => Vue.component(MyRichText.name, MyRichText)

export default MyRichText