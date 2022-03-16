<script setup lang="ts">
import { useStarWarsShips } from '../stores/starships';
const storeStarships = useStarWarsShips();
const fetchInitialShips = storeStarships.fetchStarshipsList;
const fetchStarshipsNext = storeStarships.fetchStarshipsNext;
fetchInitialShips();

</script>
<template>
    <ul class="py-10 flex flex-col gap-6">
        <li
            v-for="{ name, model, url }, index in storeStarships.starshipList"
            :key="name"
            class="bg-gray-600/25 w-4/6 m-auto p-6 rounded"
        >
            <h2 class="text-3xl text-gray-200 mb-3">
                <router-link :to="url.split('/api')[1]">{{ name.toUpperCase() }}</router-link>
            </h2>
            <p class="text-gray-200 text-xl">{{ model }}</p>
        </li>
    <button @click="fetchStarshipsNext(storeStarships.next)" class="text-white bg-gray-600/25  m-auto p-6 rounded disabled:bg-gray-50/50" :disabled="!storeStarships.next">More Starships</button>
    </ul>

</template>

<style scoped>
</style>