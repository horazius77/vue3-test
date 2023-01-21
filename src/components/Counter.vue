<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { useCounterStore } from "../stores/counter";


const { count } = storeToRefs(useCounterStore());
useLocalStorage("counter", count);
const store = useCounterStore();
</script>

<template>
  <button @click="store.decrease">-</button>
  Counter: {{ count }}
  <button @click="store.increment">+</button>
</template>
