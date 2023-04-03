const userModule = {
  state: () => {
    return {
      uuid: '',
      picture: '',
      name: '',
    }
  },
  getters: {
    getLength(state) {
      return state.items.length
    },
  },
}

export default userModule
