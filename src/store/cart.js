const cartModule = {
  state: () => {
    return {
      cartItems: [],
    }
  },
  getters: {
    getCartCount(state) {
      return state.cartItems.length
    },
    getTotalPrice(state) {
      return state.cartItems.reduce((sum, item) => {
        return item.price * item.quantity + sum
      }, 0)
    },
  },
  mutations: {
    addItem(state, item) {
      const index = state.cartItems.findIndex((p) => p.id === item.id)
      if (index !== -1) state.cartItems[index].quantity++
      else state.cartItems.push({ ...item, quantity: 1 })
    },
    removeItem(state, id) {
      state.cartItems = state.cartItems.filter((i) => i.id !== id)
    },
    incQuantity(state, id) {
      const index = state.cartItems.findIndex((p) => p.id === id)
      if (index !== -1) state.cartItems[index].quantity++
    },
    decQuantity(state, id) {
      const index = state.cartItems.findIndex((p) => p.id === id)
      if (index !== -1) state.cartItems[index].quantity--
    },
  },
}

export default cartModule
