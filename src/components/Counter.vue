<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCounterStore } from "../stores/counter";
import { useLocalStorage } from "@vueuse/core";

const { count } = storeToRefs(useCounterStore());
useLocalStorage("counter", count);

const store = useCounterStore();
</script>
<template>
  Counter: {{ count }}
  <button @click="store.increment">+</button>
</template>
