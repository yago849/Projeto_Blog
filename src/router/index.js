import { createRouter, createWebHistory } from 'vue-router'
import AreaPostagem from '@/components/AreaPostagem.vue'
import Login from '@/components/TelaLogin.vue'

const routes = [
    {
        path:'/',
        name: 'Login',
        component: Login
    },
    {
        path: '/areapostagem',
        name: 'AreaPostagem',
        component: AreaPostagem
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;