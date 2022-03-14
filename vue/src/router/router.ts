import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import Welcome from '../views/Welcome.vue';

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Welcome,
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});