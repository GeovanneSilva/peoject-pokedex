import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes: [
    {
      // home
      path: '/',
      name: 'home',
      component: () => import('@/views/home.vue'),
    },
    {
      // pokedex
      path: '/pokedex',
      name: 'pokedex',
      component: () => import('@/views/pokedex.vue'),
    },
  ],
});

export default router;
