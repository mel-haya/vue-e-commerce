import axios from 'axios'
const API_URL = 'http://localhost:3000'

const product = {
  state: () => {
    return {
      items: [],
      currProduct: {},
      categories: [],
      currCategory: '',
    }
  },
  getters: {
    getProductCount(state) {
      return state.items.length
    },
    products(state) {
      return state.items
    },
    filteredProducts(state) {
      if (state.currCategory) {
        return state.items.filter((item) => {
          return item.category === state.currCategory
        })
      }
      return state.items
    },
  },
  mutations: {
    setProduct(state, newProduct) {
      state.currProduct = newProduct
    },
    setCategory(state, category) {
      state.currCategory = category
    },
  },
  actions: {
    async initProducts(context) {
      let res = await axios.get(API_URL + '/products')
      context.state.items = res.data
      res = await axios.get(API_URL + '/categories')
      context.state.categories = res.data
    },
    async fetchProduct(context, id) {
      const res = await axios.get(`${API_URL}/products/${id}`)
      context.commit('setProduct', res.data)
    },
  },
}

export default product
