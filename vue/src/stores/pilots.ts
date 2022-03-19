import { Pilot } from '../interfaces/interfaces';
import { defineStore } from "pinia";

export const useStarWarsPilots = defineStore('pilots', {
    state: () => ({
        pilots: [] as Pilot[],
        idPilots: [] as string[]
    }),
    actions: {
        async fetchPilots(arrayPilotsUris:string[]): Promise<void> {
            this.pilots = [];
            for (const pilotUri of arrayPilotsUris) {
                const res = await fetch(`${pilotUri}`);
                const pilotsResponse = await res.json() as Pilot;           
                this.pilots.push(pilotsResponse)
            }
        },

    },
});
