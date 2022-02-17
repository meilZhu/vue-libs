/*
 * @fileName: 基础信息脚本
 * @Date: 2021-01-21 10:22:43
 * @Author: manyao.zhu
 */
import '~/css/change_element_theme.scss'
import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Element from 'element-ui'
Vue.use(Element, {
  size: 'small'
})

import DtTree from '@ithinkdt/vue-virsual-tree'
Vue.use(DtTree)

import Application from '@styleofpicasso/3d-application';
Vue.use(Application)

// import 'font-awesome/css/font-awesome.min.css'

// 国际化处理
import i18n from '~/shared/lang'

// 自定义工具
import './shared/utils/router-protect'
import '~/shared/utils/automatic_logon_component'  // 自动注册基础组件
import '~/shared/utils/theme/register_layout_component'
import '~/components/shared/filter'
// import '~/shared/utils/plugin.register' // 3d自动注册

// 自定义指令
import directives from '~/shared/directive'
Vue.use(directives)

import store from './store'
import router from './router'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
