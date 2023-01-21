<script setup lang="ts">
import Counter from "./components/Counter.vue";
import CounterSetter from "./components/CounterSetter.vue";
import EinkaufInput from "./components/EinkaufInput.vue";
import EinkaufsListe from "./components/EinkaufsListe.vue";
</script>

<template>
  <counter-setter />
  <Counter />
  <Counter />

  <hr />
  <EinkaufInput />
  <EinkaufsListe />

</template>

<style scoped></style>
