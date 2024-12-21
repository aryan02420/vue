<script setup lang="ts">
import { reactive, ref } from "vue";
import CountContext from "./count-context";
import UseContextComponent from "./use-context-component.vue";

const count = ref(0);
const contextValue = reactive({ count });
</script>

<template>
  <div>
    <CountContext.Provider :value="contextValue">
      <UseContextComponent />
    </CountContext.Provider>
    <button @click="count++">Increment</button>
  </div>
</template>

<style scoped>
button {
  background-color: darkgreen;
  color: white;
  padding: 4px 16px;
  border-radius: 8px;
  font-size: 16px;
}
</style>