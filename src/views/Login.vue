<template>
  <div class="container">
    <form @submit.prevent="login">
      <label for="email">Email address:</label>
      <input aria-label="Enter your email address" v-model="email" placeholder="email" type="text" name="email" />

      <label aria-label="Enter your email address" for="password">Password:</label>
      <input v-model="password" placeholder="password" type="password" name="password" />
      <input type="submit" />
    </form>

    :{{ user }}
  </div>

  <button @click="logout">Logout</button>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import jwt_decode from "jwt-decode";

export default {
  name: 'Login',
  data() {
    return {
      email: 'testy.mctestface@test.com',
      password: 'password',
    };
  },
  methods: {
    ...mapMutations(['setUser']),
    ...mapActions(['logout']),
    async login(e) {
      e.preventDefault();

      const response = await fetch("http://localhost:3030/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      });

      const user = await response.json();

      var decoded = jwt_decode(user.token);
      console.log(decoded);

      const { localStorage } = window;
      localStorage.setItem('user', JSON.stringify(user));

      this.setUser(user);
    }
  },

  computed: {
    ...mapState(['user'])
  }
}
</script>
