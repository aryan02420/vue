<script setup lang="ts">
import { reactive, ref } from "vue";
import CountContext from "./count-context";
import CountDisplay from "./count-display.vue";
</script>

<template>
  <div>
    <CountDisplay />
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 16px;
}
</style>