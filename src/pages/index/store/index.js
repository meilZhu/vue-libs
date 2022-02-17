/*
 * @fileName: 状态集中管理
 * @Date: 2021-01-26 10:35:23
 * @Author: manyao.zhu
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './states'
import mutations from './mutations'
import actions from './actions'
import module from './module'

const store = new Vuex.Store({
  state: {
    ...state
  },
  mutations: {
    ...mutations
  },
  actions: {
    ...actions
  },
  modules: module
})

export default store

