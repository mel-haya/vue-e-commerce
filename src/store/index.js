import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart'
import product from './products'
import user from './user'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { cart, product, user },
})

export default store
export const useStore = () => store
