// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Postagens from './components/componenteBlog.vue';
import Login from './components/TelaLogin.vue';

const routes = [

    {
        path: '/postagens',
        name: 'postagens',
        component: componenteBlog
    },
    {
        path: '/login',
        name: 'Login',
        component: TelaLogin
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
