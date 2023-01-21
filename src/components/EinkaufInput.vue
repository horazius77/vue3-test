<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useShoppingListStore } from "../stores/shoppingList";
import { ref } from "vue";

const { anzahlGegenstaende, liste } = storeToRefs(useShoppingListStore());
const store = useShoppingListStore();

const gegenstand = ref("");
const anzahl = ref(0);

const onClickButton = () => {
  store.addGegenstand(gegenstand.value, anzahl.value );

  gegenstand.value = "";
  anzahl.value = 0;
};
</script>

<template>
  <p>Es gibt {{ anzahlGegenstaende }} Gegenstände in der Liste.</p>
  <div class="card">
    <input type="text" v-model="gegenstand" />
    <input type="number" v-model="anzahl" />
    <button type="button" @click="onClickButton">
      Hinzufügen
    </button>
  </div>
</template>
