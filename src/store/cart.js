const cartModule = {
  state: () => {
    return {
      items: [],
    }
  },
  getters: {
    getCartCount(state) {
      return state.items.length
    },
  },
  mutations: {
    addItem(state, item) {
      state.items.push(item)
    },
    removeItem(state, item) {
      state.items = state.items.filter((i) => i.id !== item.id)
    },
  },
}

export default cartModule
