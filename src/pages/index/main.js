/*
 * @fileName: 基础信息脚本
 * @Date: 2021-01-21 10:22:43
 * @Author: manyao.zhu
 */
import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

import 'font-awesome/css/font-awesome.min.css'

// 自定义工具
import './shared/utils/router-protect'

// 自定义指令
import directives from '~/shared/directive'
Vue.use(directives)

import store from './store'
import router from './router'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
