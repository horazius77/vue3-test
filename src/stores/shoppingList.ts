import {defineStore} from 'pinia'

export const useShoppingListStore = defineStore({
    id: 'shoppingList',
    state: () => ({
        liste:[] as { gegenstand: string, anzahl: number }[]
    }),
    getters: {
        anzahlGegenstaende: (state) => {
            return state.liste.length;
        },
    },
    actions: {
        addGegenstand(gegenstand: string, anzahl: number) {
            this.liste.push({ gegenstand, anzahl });
        },
    },
});
