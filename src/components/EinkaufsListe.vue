<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useLocalStorage } from "@vueuse/core";

import { useShoppingListStore } from "../stores/shoppingList";

const { liste } = storeToRefs(useShoppingListStore());
useLocalStorage("shoppingList", liste);

</script>

<template>
  <div>
    <ul>
      <li v-for="item in liste" :key="item.gegenstand">
        {{ item.anzahl }} {{ item.gegenstand }}
      </li>
    </ul>
  </div>
</template>
