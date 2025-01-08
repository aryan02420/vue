import { defineComponent, provide, toRef } from "vue";
import type { InjectionKey, Ref } from "vue";
import { ContextProvider } from "./types.ts";

export const createContextProvider = <TValue>(
  injectionKey: InjectionKey<Ref<TValue>>,
  name: string
): ContextProvider<TValue> => defineComponent(
  (props, ctx) => {
    provide(injectionKey, toRef(() => props.value));
    return () => ctx.slots?.default?.();
  },
  {
    props: ["value"],
    name: name + 'ContextProvider'
  }
);
