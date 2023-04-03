const productModule = {
  state: () => {
    return {
      items: [],
    }
  },
  getters: {
    getLength(state) {
      return state.items.length
    },
  },
}

export default productModule
