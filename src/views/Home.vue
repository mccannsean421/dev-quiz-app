<template>
  <h1>Home</h1>
</template>

<script>
export default {
  name: 'Home',
  async mounted() {
    const questions = await fetch('http://localhost:3030/questions', {
      method: 'GET',
    });
  },
}
</script>
