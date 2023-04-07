const userModule = {
  state: () => {
    return {
      currUser: null,
    }
  },
  getters: {
    getUser(state) {
      return state.currUser
    },
  },
  mutations: {
    setUser(state, user) {
      state.currUser = user
    },
  },
}

export default userModule
