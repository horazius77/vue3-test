import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
    id: 'counter',
    state: () => ({
        count: 23,
    }),
    getters: {
        double: (state) => {
            return state.count * 2;
        }
    },
    actions: {
        increment() {
            this.count++;
        },
        decrease() { this.count--; } 
    }
});