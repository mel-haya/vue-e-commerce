import Vue from 'vue'
import Vuex from 'vuex'
import cartModule from './cart'
import productModule from './products'
import userModule from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { cartModule, productModule, userModule },
})
