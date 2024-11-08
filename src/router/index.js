import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Postagens from '@/components/componenteBlog.vue';
import Login from '@/components/TelaLogin.vue';

const routes = [
  {
    path: '/postagens',
    name: 'postagens',
    component: Postagens
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
