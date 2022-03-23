<script setup lang="ts">
import RegisterForm from './RegisterForm.vue';
import LogInForm from './LogInForm.vue';
import { useUsers } from '../stores/users';
const storeUsers = useUsers();
</script>


<template>
    <header class="fondo-logo flex justify-between text-white items-center flex-col md:flex-row overflow-hidden">
        <div></div>
        <img src="../assets/starwarslogo.png" alt="StarWars logo" class="p-20 text-center md:ml-52 lg:ml-60  ml-2" />
        <div v-if="!storeUsers.isLogged" class="sm:pr-12 pr-0 text-2xl mb-16 md:mb-0">
            <span class="uppercase hover:cursor-pointer" @click="storeUsers.isOpenLogIn = true">Log In </span>
            <span>//</span>
            <span class="uppercase hover:cursor-pointer" @click="storeUsers.isOpenRegister = true"> Sign up</span>
        </div>
        <div v-else class="sm:pr-12 pr-0 text-2xl mb-16 md:mb-0">
            <span class="uppercase hover:cursor-pointer" @click="storeUsers.isOpenLogIn = true">Log Out </span>
        </div>
    </header>
    <nav class="text-slate-200 border-collapse">
        <ul class="flex justify-center border border-slate-200">
            <router-link
                to="/"
                class-active="active"
                class="border border-slate-200 border-collapse"
            >
                <li class="p-4">HOME</li>
            </router-link>
            <router-link
                to="/starships"
                class-active="active"
                class="border border-slate-200 border-collapse"
            >
                <li class="p-4 px-6">STARSHIPS</li>
            </router-link>
        </ul>
    </nav>
    <LogInForm />
    <RegisterForm />
</template>

<style scoped>
.fondo-logo {
    background-image: url("../assets/fondologo.jpeg");
}

.router-link-exact-active {
    @apply border-b-[#3273c5] border-b-4;
}
</style>