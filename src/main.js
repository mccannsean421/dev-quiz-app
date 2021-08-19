import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from '../src/router';
import store from './store';

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.authenticated) {
      next({ name: 'Login' })
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})

createApp(App).use(router).use(store).mount('#app')
