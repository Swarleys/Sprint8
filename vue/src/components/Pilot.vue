<script setup lang="ts">
import { useStarWarsPilots } from '../stores/pilots';
const storePilots = useStarWarsPilots();
</script>

<template>
    <div v-for="pilot, index in storePilots.pilots" class="flex my-6 md:flex-row flex-col">
        <img
            class="border-b-4 border-b-[#9e4f60] md:border-r-4 md:border-b-0 md:border-r-[#9e4f60] md:w-[250px] w-full"
            :src="`https://starwars-visualguide.com/assets/img/characters/${storePilots.idPilots[index]}.jpg`"
        />
        <div
            v-if="pilot"
            class="text-white flex justify-center items-center flex-col bg-[#282727] flex-grow gap-4 py-10"
        >
            <h3 class="text-4xl">{{ pilot.name }}</h3>
            <ul class="grid grid-cols-2 gap-x-10 gap-y-2 text-2xl ml-10">
                <li>
                    <span class="text-[#9e4f60]">Height:</span>
                    {{ pilot.height }} cm
                </li>
                <li>
                    <span class="text-[#9e4f60]">Mass:</span>
                    {{ pilot.mass }} kg
                </li>
                <li>
                    <span class="text-[#9e4f60]">Hair color:</span>
                    {{ pilot.hair_color }}
                </li>
                <li>
                    <span class="text-[#9e4f60]">Eye color:</span>
                    {{ pilot.eye_color }}
                </li>
                <li>
                    <span class="text-[#9e4f60]">Birth year:</span>
                    {{ pilot.birth_year }}
                </li>
                <li>
                    <span class="text-[#9e4f60]">Gender:</span>
                    {{ pilot.gender }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
</style>