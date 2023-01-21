<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../stores/counter';

const { count } = storeToRefs(useCounterStore());
const store = useCounterStore();

</script>
<template>
Counter: {{ count }}
<button @click="store.increment">+</button>

</template>
