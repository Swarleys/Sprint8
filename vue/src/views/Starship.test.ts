import { useStarWarsShips } from './../stores/starships';
import { setActivePinia, createPinia } from 'pinia';
import { mount } from '@vue/test-utils';
import { describe, test, expect, beforeAll } from 'vitest';
beforeAll(() => {
    setActivePinia(createPinia());
    const storeStarships = useStarWarsShips();
    storeStarships.starship = {
        name: 'Tardis',
        model: 'Police Box',
        manufacturer: 'TimeLords',
        cost_in_credits: '1000000',
        length: '3',
        max_atmosphering_speed: 'infinite',
        crew: '1',
        passengers: '3',
        cargo_capacity: 'infinite',
        consumables: 'food',
        hyperdrive_rating: 'Time Vortex',
        MGLT: 'mglt',
        starship_class: 'Time And Relative Dimensions In Space',
        pilots: ['The Doctor', 'Esteban'],
        films: ['The day of the Doctor'],
        created: '1963',
        edited: '2022',
        url: 'url'
    };
})

import Starship from '../views/Starship.vue';

describe('useStarWarsPilots', () => {
    test('Testing storePilots', () => {
        const storeStarships = useStarWarsShips();
        expect(storeStarships).toBeDefined();
        expect(storeStarships.starship.name).toBe('Tardis');
        expect(storeStarships.starship.model).toBe('Police Box');
        expect(storeStarships.starship.manufacturer).toBe('TimeLords');
        expect(storeStarships.starship.cost_in_credits).toBe('1000000');
        expect(storeStarships.starship.length).toBe('3');
        expect(storeStarships.starship.max_atmosphering_speed).toBe('infinite');
        expect(storeStarships.starship.crew).toBe('1');
        expect(storeStarships.starship.passengers).toBe('3');
        expect(storeStarships.starship.cargo_capacity).toBe('infinite');
        expect(storeStarships.starship.consumables).toBe('food');
        expect(storeStarships.starship.hyperdrive_rating).toBe('Time Vortex');
        expect(storeStarships.starship.MGLT).toBe('mglt');
        expect(storeStarships.starship.starship_class).toBe('Time And Relative Dimensions In Space');
        expect(['The Doctor', 'Esteban']).toEqual(expect.arrayContaining(storeStarships.starship.pilots))
        expect(['The day of the Doctor']).toEqual(expect.arrayContaining(storeStarships.starship.films))
        expect(storeStarships.starship.created).toBe('1963');
        expect(storeStarships.starship.edited).toBe('2022');
        expect(storeStarships.starship.url).toBe('url');
        expect(storeStarships.starship.name).not.toBe('Millenium Falcon');
        expect(storeStarships.starship.model).not.toBe('Starship');
        expect(storeStarships.starship.manufacturer).not.toBe('Human');
        expect(storeStarships.starship.cost_in_credits).not.toBe('1000');
        expect(storeStarships.starship.length).not.toBe('55');
        expect(storeStarships.starship.max_atmosphering_speed).not.toBe('500');
        expect(storeStarships.starship.crew).not.toBe('2');
        expect(storeStarships.starship.passengers).not.toBe('6');
        expect(storeStarships.starship.cargo_capacity).not.toBe('500');
        expect(storeStarships.starship.consumables).not.toBe('oil');
        expect(storeStarships.starship.hyperdrive_rating).not.toBe('FTL');
        expect(storeStarships.starship.MGLT).not.toBe('pokemon');
        expect(storeStarships.starship.starship_class).not.toBe('Starship');
        expect(['Han Solo']).not.toEqual(expect.arrayContaining(storeStarships.starship.pilots))
        expect(['A new Hope']).not.toEqual(expect.arrayContaining(storeStarships.starship.films))
        expect(storeStarships.starship.created).not.toBe('1977');
        expect(storeStarships.starship.edited).not.toBe('2019');
        expect(storeStarships.starship.url).not.toBe('StarWars');
        expect(storeStarships.amountPilots).toBe(2);
        expect(storeStarships.amountPilots).not.toBe(4);
        expect(storeStarships.messagePilots).toBe('We found 2 pilots for the Tardis:')
        expect(storeStarships.messagePilots).not.toBe('We found 6 pilots for the Millenium Falcon:')
    })
})

describe('Mounting Component', () => {
    test('mount component with values from the store', async () => {
        expect(Starship).toBeTruthy();
    })
})
