import { createRouter, createWebHistory, RouterOptions } from 'vue-router';

const routes = [
    { path: "/", redirect: "/home" },
    { name: 'home', path: '/home', component: () => import('../components/Home.vue'), meta: { requireAuth: false, title: "riki homepage" } },
    { name: 'NotFound', path: '/page-not-found', component: () => import('../components/page/PageNotFound.vue'), meta: { requireAuth: false } },
    { path: '/:pathMatch(.*)*', redirect: "/page-not-found" },
]
const router = createRouter({
    history: createWebHistory(),
    routes
} as RouterOptions)

export default router