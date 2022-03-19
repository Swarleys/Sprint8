import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import Welcome from '../views/Welcome.vue';
import Starships from '../views/Starships.vue';
import Starship from '../views/Starship.vue';
import { useUsers } from './../stores/users';

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Welcome,
    },
    {
        path: '/starships',
        component: Starships,
        meta: { requiresAuth: true }
    },
    {
        path: '/starships/:id',
        component: Starship,
        meta: { requiresAuth: true }
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to) => {
    const storeUsers = useUsers();

    if (to.meta.requiresAuth && !storeUsers.isLogged) {
        storeUsers.isOpenLogin = true;
        return '/'
    }
})

