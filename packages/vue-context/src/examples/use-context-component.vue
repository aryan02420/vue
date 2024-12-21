<script setup lang="ts">
import CountContext from "./count-context";
import { useContext } from "../main";

const contextValue = useContext(CountContext);
</script>

<template>
  <p>Count: {{ contextValue?.count }}</p>
</template>
