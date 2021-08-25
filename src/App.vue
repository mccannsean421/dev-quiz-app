<template>
  <div class="h-screen">
    <Navigation />
    <div class="container ml-auto mr-auto h-full">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from './components/Navigation/Navigation.vue';
import Footer from './components/Footer/Footer.vue';

export default {
  name: "App",
  components: {
    Navigation,
    Footer,
  }
}
</script>
