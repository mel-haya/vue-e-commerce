import axios from 'axios'
const API_URL = 'http://localhost:3000'

const product = {
  state: () => {
    return {
      items: [],
      currProduct: {},
    }
  },
  getters: {
    getProductCount(state) {
      return state.items.length
    },
    products(state) {
      return state.items
    },
  },
  mutations: {
    setProduct(state, newProduct) {
      state.currProduct = newProduct
    },
  },
  actions: {
    async initProducts(context) {
      const res = await axios.get(API_URL + '/products')
      context.state.items = res.data
    },
    async fetchProduct(context, id) {
      const res = await axios.get(`${API_URL}/products/${id}`)
      context.commit('setProduct', res.data)
    },
  },
}

export default product
