<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useShoppingListStore } from "../stores/shoppingList";

const { liste } = storeToRefs(useShoppingListStore());
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
