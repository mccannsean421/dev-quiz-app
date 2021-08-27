<template>
<div class="w-full max-w-xs ml-auto mr-auto">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="login">
    <div class="mb-3">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email address:</label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        aria-label="Enter your email address"
        v-model="email"
        placeholder="email"
        type="text"
        name="email" />
    </div>
    <div class="mb-3">
      <label class="block text-gray-700 text-sm font-bold mb-2" aria-label="Enter your email address" for="password">Password:</label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="password" placeholder="password" type="password" name="password" />
    </div>
    <input class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" />
  </form>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import UserLogin from '../../../compasables/UserLogin';

export default {
  setup() {
    const { email, password, login } = UserLogin();
    return {
      email,
      password,
      login,
    };
  },
  name: 'LoginForm',
  methods: {
    ...mapMutations(['setUser']),
    ...mapActions(['logout']),
  },

  computed: {
    ...mapState(['user'])
  }
}
</script>
