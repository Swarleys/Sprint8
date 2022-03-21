import { setActivePinia, createPinia } from 'pinia';
import { mount } from '@vue/test-utils';
import { describe, test, expect, beforeAll } from 'vitest';
import { useStarWarsPilots } from '../stores/pilots';
beforeAll(() => {
    setActivePinia(createPinia());
    const storePilots = useStarWarsPilots();
    storePilots.pilots = [{
        name: 'Esteban',
        height: '169',
        mass: '66',
        hair_color: 'brown',
        skin_color: 'white',
        eye_color: 'yellow',
        birth_year: '1985',
        gender: 'male',
        homeworld: 'earth',
        films: ['episode1'],
        species: ['human'],
        vehicles: ['cars'],
        starships: ['tardis'],
        created: 'yesterday',
        edited: 'today',
        url: 'url',
    }];
    storePilots.idPilots = ['1']

})

import Pilot from './Pilot.vue';

describe('useStarWarsPilots', () => {
    test('Testing storePilots', () => {
        const storePilots = useStarWarsPilots();
        expect(storePilots).toBeDefined();
        expect(storePilots.pilots[0].name).toBe('Esteban');
        expect(storePilots.pilots[0].name).not.toBe('Pokemon');
        expect(storePilots.pilots[0].height).toBe('169');
        expect(storePilots.pilots[0].height).not.toBe('16');
        expect(storePilots.pilots[0].mass).toBe('66');
        expect(storePilots.pilots[0].mass).not.toBe('65');
        expect(storePilots.pilots[0].hair_color).toBe('brown');
        expect(storePilots.pilots[0].hair_color).not.toBe('blue');
        expect(storePilots.pilots[0].skin_color).toBe('white');
        expect(storePilots.pilots[0].skin_color).not.toBe('green');
        expect(storePilots.pilots[0].eye_color).toBe('yellow');
        expect(storePilots.pilots[0].eye_color).not.toBe('red');
        expect(storePilots.pilots[0].gender).toBe('male');
        expect(storePilots.pilots[0].gender).not.toBe('female');
        expect(storePilots.idPilots[0]).toBe('1');
        expect(storePilots.idPilots[0]).not.toBe('2');
    })
})

describe('Mounting Component', () => {
    test('mount component with values from the store', async () => {
        expect(Pilot).toBeTruthy();
        const wrapper = mount(Pilot);
        const name = wrapper.get('h3');
        console.log(wrapper.findAll('li span').at(0)?.text());
        expect(name.text()).toBe('Esteban');
        expect(name.text()).not.toBe('Pokemon');
        expect(wrapper.findAll('li').at(0)?.text()).toContain('169')
        expect(wrapper.findAll('li').at(0)?.text()).not.toContain('168')
        expect(wrapper.findAll('li').at(1)?.text()).toContain('66')
        expect(wrapper.findAll('li').at(1)?.text()).not.toContain('69')
        expect(wrapper.findAll('li').at(2)?.text()).toContain('brown')
        expect(wrapper.findAll('li').at(2)?.text()).not.toContain('green')
        expect(wrapper.findAll('li').at(3)?.text()).toContain('yellow')
        expect(wrapper.findAll('li').at(3)?.text()).not.toContain('red')
        expect(wrapper.findAll('li').at(4)?.text()).toContain('1985')
        expect(wrapper.findAll('li').at(4)?.text()).not.toContain('2022')
        expect(wrapper.findAll('li').at(5)?.text()).toContain('male')
        expect(wrapper.findAll('li').at(5)?.text()).not.toContain('female')
    })
})
