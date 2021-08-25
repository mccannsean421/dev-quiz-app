<template>
  <div class="h-full w-full flex items-center justify-items-center ">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '../components/Form/LoginForm/LoginForm.vue';

export default {
  name: 'Login',
  components: {
    LoginForm
  },
}
</script>
