import App from './App.vue'
import { describe, test, expect } from 'vitest';

describe('Testing App component', () => {
    test('first test', () => {
        expect(App).toBeTruthy()
    })
})