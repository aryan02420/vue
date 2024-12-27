<script setup lang="ts">
import { reactive, ref } from "vue";
import CountContext from "./count-context.ts";
import CountDisplay from "./count-display.vue";

const count = ref(0);
const contextValue = reactive({ count });
</script>

<template>
  <div>
    <CountContext.Provider :value="contextValue">
      <CountDisplay />
    </CountContext.Provider>
    <button @click="count++">Increment</button>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 16px;
}
button {
  background-color: darkgreen;
  color: white;
  padding: 4px 16px;
  border-radius: 8px;
  font-size: 16px;
}
</style>