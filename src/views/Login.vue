<template>
  <div class="container">
    <form @submit.prevent="login">
      <label for="email">Email address:</label>
      <input v-model="email" placeholder="email" type="text" name="email" />

      <label for="password">Password:</label>
      <input v-model="password" placeholder="password" type="password" name="password" />
      <input type="submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
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
    }
  }
}
</script>
