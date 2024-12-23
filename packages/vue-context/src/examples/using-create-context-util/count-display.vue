<script setup lang="ts">
import { useCount } from "./count-context";

const value = useCount();
</script>

<template>
  <p>Count: {{ value.count }}</p>
</template>

<style scoped>
p {
  font-size: 24px;
}
</style>