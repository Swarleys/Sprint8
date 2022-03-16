import { Starship, StarshipList } from '../interfaces/interfaces';
import { defineStore } from "pinia";

const baseURI = 'https://swapi.dev/api'

export const useStarWarsShips = defineStore('starships', {
    state: () => ({
        starshipList: [] as Starship[],
        starship: {} as Starship,
        next: 'https://swapi.dev/api/starships/'
    }),
    actions: {
        async fetchStarshipsList(): Promise<StarshipList> {
            const res = await fetch(`${baseURI}/starships`);
            const starShipsResponse = await res.json();
            if (this.starshipList.length === 0) {                
                this.starshipList.push(...starShipsResponse.results);
                this.next = starShipsResponse.next;
            }
            return starShipsResponse;
        },
        async fetchStarshipsNext(uri: string): Promise<StarshipList> {
            const res = await fetch(`${uri}`);
            const starShipsResponse = await res.json() as StarshipList;
            this.starshipList.push(...starShipsResponse.results)
            this.next = starShipsResponse.next as string;
            return starShipsResponse;
        },
        async fetchStarship(uri: string): Promise<Starship> {
            const res = await fetch(`${baseURI}${uri}`);
            this.starship = await res.json();
            return this.starship;
        },
    },

})