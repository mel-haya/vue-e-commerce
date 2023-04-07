import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart'
import product from './products'
import user from './user'
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
})

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { cart, product, user },
  plugins: [vuexLocal.plugin],
})

export default store
export const useStore = () => store
