import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
     requiresAuth: true,
    }
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
     requiresAuth: true,
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
