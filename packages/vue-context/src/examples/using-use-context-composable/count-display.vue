<script setup lang="ts">
import CountContext from "./count-context.ts";
import { useContext } from "@aryan02420/vue-context";

const value = useContext(CountContext);
</script>

<template>
  <p>Count: {{ value?.count }}</p>
</template>

<style scoped>
p {
  font-size: 24px;
}
</style>