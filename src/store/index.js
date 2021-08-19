import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
  state () {
    return {
      user: null,
      token: null,
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
  },

  actions: {

  },

  getters: {

  }
});

export default store;
