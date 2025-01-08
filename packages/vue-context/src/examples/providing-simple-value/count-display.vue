<script setup lang="ts">
import CountContext from "./count-context.ts";
</script>

<template>
  <CountContext.Consumer v-slot="count">
    <p>Count: {{ count }}</p>
  </CountContext.Consumer>
</template>

<style scoped>
p {
  font-size: 24px;
}
</style>