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
    logout() {
      const { localStorage } = window;
      localStorage.removeItem('user');
    }
  },

  getters: {
    authenticated(state) {
      const { localStorage } = window;
      const user = localStorage.user ? JSON.parse(localStorage.user) : null;
      return !!user?.token;
    }
  }
});

export default store;
