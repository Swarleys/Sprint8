<script setup lang="ts">
import RegisterForm from './RegisterForm.vue';
import LogInForm from './LogInForm.vue';
</script>


<template>
    <header class="fondo-logo flex justify-center">
        <img src="../assets/starwarslogo.png" alt="StarWars logo" class="p-20 text-center" />
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