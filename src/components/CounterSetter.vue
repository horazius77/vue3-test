<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "../stores/counter";

const { count } = storeToRefs(useCounterStore());

</script>

<template>
    <input type="number" v-model="count" />
</template>