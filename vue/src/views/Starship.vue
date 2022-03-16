<script setup lang="ts">
import { ref } from 'vue'
import { useStarWarsShips } from '../stores/starships'
import { useRoute } from 'vue-router';
const storeStarships = useStarWarsShips();
const route = useRoute();
const id = route.params.id;
const fetchShip = storeStarships.fetchStarship;
fetchShip(route.fullPath);
const src = ref(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`);

const replaceByDefault = (e: Event): void => {
    src.value = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
}

</script>

<template>
    <main class="flex flex-col justify-center items-center   ">
        <img :src="src" @error="replaceByDefault" :alt="storeStarships.starship.name" width="960" class="border-b-4 border-b-orange-700 mb-4">
        <section class="mx-4 max-w-[960px]">
            <h1 class="text-5xl text-gray-300 my-4">{{ storeStarships.starship.name }}</h1>
            <p class="text-2xl my-4 text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A dicta molestiae, modi consequatur sit rerum tenetur voluptas praesentium dolores laborum doloribus delectus quam nihil corrupti sunt, necessitatibus autem explicabo? Mollitia, labore. Neque odit consectetur mollitia, laboriosam facere eveniet sapiente porro tempore, at ipsum architecto iste eligendi dolorem quod, est repudiandae?</p>
            <section class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <h3 class="text-2xl text-gray-300">Model: {{ storeStarships.starship.model }}</h3>
                <h3 class="text-2xl text-gray-300">Manufacturer: {{ storeStarships.starship.manufacturer }}</h3>
                <h3 class="text-2xl text-gray-300">Cost in credits: {{ storeStarships.starship.cost_in_credits }}</h3>
                <h3 class="text-2xl text-gray-300">Length: {{ storeStarships.starship.length }}</h3>
                <h3 class="text-2xl text-gray-300">Max atmosphering speed: {{ storeStarships.starship.max_atmosphering_speed }}</h3>
                <h3 class="text-2xl text-gray-300">Crew: {{ storeStarships.starship.crew }}</h3>
                <h3 class="text-2xl text-gray-300">Passengers: {{ storeStarships.starship.passengers }}</h3>
                <h3 class="text-2xl text-gray-300">Cargo capacity: {{ storeStarships.starship.cargo_capacity }}</h3>
                <h3 class="text-2xl text-gray-300">Consumables: {{ storeStarships.starship.consumables }}</h3>
                <h3 class="text-2xl text-gray-300">Hyperdrive rating: {{ storeStarships.starship.hyperdrive_rating }}</h3>
                <h3 class="text-2xl text-gray-300">MGLT: {{ storeStarships.starship.MGLT }}</h3>
                <h3 class="text-2xl text-gray-300">Starship class: {{ storeStarships.starship.starship_class }}</h3>
            </section>
        </section> 
    </main>
</template>

<style scoped>
</style>