/*
 * @fileName: 注册所有布局的组件
 * @Date: 2021-04-30 17:51:53
 * @Author: manyao.zhu
 */

import Vue from 'vue' 

import layout from '~/components/theme/main/layout'
import headerMenuLayout from '~/components/theme/main/header_menu_layout'
import headerLayout from '~/components/theme/main/header_layout'

Vue.component('layout', layout)
Vue.component('header_menu_layout', headerMenuLayout)
Vue.component('header_layout', headerLayout)