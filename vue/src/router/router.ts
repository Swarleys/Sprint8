import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import Welcome from '../views/Welcome.vue';
import Starships from '../views/Starships.vue';
import Starship from '../views/Starship.vue';

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Welcome,
    },
    {
        path: '/starships',
        component: Starships,
    },
    {
        path: '/starships/:id',
        component: Starship,
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});