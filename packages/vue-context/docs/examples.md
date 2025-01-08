---
title: Examples | vue-context
---

<script setup lang="ts">
import Example1 from '../src/examples/using-provider-consumer-components/app.vue';
import Example2 from '../src/examples/using-use-context-composable/app.vue';
import Example3 from '../src/examples/using-fallback-value/app.vue';
import Example4 from '../src/examples/using-create-context-util/app.vue';
import Example5 from '../src/examples/providing-simple-value/app.vue';
</script>

# Examples

## Using the Provider and Consumer components

::: info Preview
<Example1 />
:::
::: code-group
<<<../src/examples/using-provider-consumer-components/app.vue
<<<../src/examples/using-provider-consumer-components/count-display.vue
<<<../src/examples/using-provider-consumer-components/count-context.ts
:::

## Using the `useContext` composable

::: info Preview
<Example2 />
:::
::: code-group
<<<../src/examples/using-use-context-composable/app.vue
<<<../src/examples/using-use-context-composable/count-display.vue
<<<../src/examples/using-use-context-composable/count-context.ts
:::

## Using a fallback value

::: info Preview
<Example3 />
:::
::: code-group
<<<../src/examples/using-fallback-value/app.vue
<<<../src/examples/using-fallback-value/count-display.vue
<<<../src/examples/using-fallback-value/count-context.ts
:::

## Using the `createContext` util

::: info Preview
<Example4 />
:::
::: code-group
<<<../src/examples/using-create-context-util/app.vue
<<<../src/examples/using-create-context-util/count-display.vue
<<<../src/examples/using-create-context-util/count-context.ts
:::

## Providing a simple value

::: info Preview
<Example5 />
:::
::: code-group
<<<../src/examples/providing-simple-value/app.vue
<<<../src/examples/providing-simple-value/count-display.vue
<<<../src/examples/providing-simple-value/count-context.ts
:::

## Providing a non reactive value

## Providing a ref value
