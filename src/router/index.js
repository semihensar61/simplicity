import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from '../store'

Vue.use(VueRouter);

const routes = [
  {
    path: '/dashboard',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/loginView.vue')
  },
  {
    path: '*',
    redirect: 'login'
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // Check if the user is logged i
  const isUserLoggedIn = store.getters.isAuthenticated;
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isUserLoggedIn) {
      store.dispatch("logOut");
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
