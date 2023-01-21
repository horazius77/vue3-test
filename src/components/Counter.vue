<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { useCounterStore } from "../stores/counter";
import { useMouse } from "../composables/mouse";

const { x, y } = useMouse();

const { count } = storeToRefs(useCounterStore());
useLocalStorage("counter", count);
const store = useCounterStore();
</script>

<template>
  <hr />
  Mouse position is at: {{ x }}, {{ y }}
  <button @click="store.decrease">-</button>
  Counter: {{ count }}
  <button @click="store.increment">+</button>
</template>
