import { defineComponent, provide } from "vue";
import type { InjectionKey } from "vue";
import { AnyContextValue, ContextProvider } from "./types.ts";

export const createContextProvider = <TValue extends AnyContextValue>(
  injectionKey: InjectionKey<TValue>,
  name: string
): ContextProvider<TValue> => defineComponent(
  (props, ctx) => {
    provide(injectionKey, props.value);
    return () => ctx.slots?.default?.();
  },
  {
    props: ["value"],
    name: name + 'ContextProvider'
  }
);
