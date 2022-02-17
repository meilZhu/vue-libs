/*
 * @fileName: 基础插件的打包配置
 * @Date: 2021-04-09 10:41:31
 * @Author: manyao.zhu
 */

import Vue from 'vue'
import Element from 'element-ui'

Vue.use(Element)
import 'element-ui/lib/theme-chalk/index.css'

import MyForm from '../../components/shared/components/my-form/index'
import MyFormItem from '../../components/shared/components/my-form-item/index'
import MyTable from '../../components/shared/components/my-table/index'
import MyUpload from '../../components/shared/components/my-upload/index'

import '../../shared/filter'

const components = [
  MyForm,
  MyFormItem,
  MyTable,
  MyUpload,
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  MyForm,
  MyFormItem,
  MyTable,
  MyUpload
}

