import { Starship, StarshipList } from '../interfaces/interfaces';
import { defineStore } from "pinia";
import { useStarWarsPilots } from './pilots';

const baseURI = 'https://swapi.dev/api'

export const useStarWarsShips = defineStore('starships', {
    state: () => ({
        starshipList: [] as Starship[],
        starship: {} as Starship,
        next: 'https://swapi.dev/api/starships/'
    }),
    getters: {
        amountPilots: (state): number | void => {
            if (state.starship) {
                return state.starship?.pilots?.length || 0;
            }
        },
        messagePilots(state): string {
            let message: string = '';
            if(this.amountPilots > 0) {
                message = `We found ${ this.amountPilots } ${ this.amountPilots === 1 ? 'pilot' : 'pilots' } for the ${ state.starship.name }:`
            }
            return message;
        }
    },
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

            if (this.starship.pilots) {
                const storePilots = useStarWarsPilots();
                storePilots.pilots = [];
                storePilots.idPilots = [];
                await storePilots.fetchPilots(this.starship.pilots)   
                storePilots.idPilots = this.starship.pilots.map((pilot) => pilot.split('people/')[1].split('/')[0]);
            }

            return this.starship;
        }
    },
})
