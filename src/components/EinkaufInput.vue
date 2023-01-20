<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useShoppingListStore } from "../stores/shoppingList";

const { liste, anzahlGegenstaende } = storeToRefs(useShoppingListStore());

const gegenstand = ref("");
const anzahl = ref(0);
</script>

<template>
  <p>Es gibt {{ anzahlGegenstaende }} Gegenstände in der Liste.</p>
  <div class="card">
    <input type="text" v-model="gegenstand" />
    <input type="number" v-model="anzahl" />
    <button type="button" @click="liste.push({ gegenstand, anzahl })">
      Hinzufügen
    </button>
  </div>
</template>
