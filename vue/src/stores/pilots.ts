import { Pilot } from '../interfaces/interfaces';
import { defineStore } from "pinia";

export const useStarWarsPilots = defineStore('pilots', {
    state: () => ({
        pilots: [] as Pilot[],
        idPilots: [] as string[]
    }),
    actions: {
        async fetchPilots(arrayPilotsUris:string[]): Promise<Pilot> {
            this.pilots = [];
            let pilotsResponse;
            for (const pilotUri of arrayPilotsUris) {
                const res = await fetch(`${pilotUri}`);
                pilotsResponse = await res.json() as Pilot;           
                this.pilots.push(pilotsResponse)
            }
            return pilotsResponse as Pilot;
        },
    },
});
