import { defineComponent, inject } from "vue";
import type { InjectionKey } from "vue";
import { AnyContextValue, ContextConsumer } from "./types.ts";

export const createContextConsumer = <TValue extends AnyContextValue>(
  injectionKey: InjectionKey<TValue>,
  name: string,
  defaultValue?: TValue
): ContextConsumer<TValue> => defineComponent(
  (_, ctx) => {
    const value = inject(injectionKey, defaultValue);
    return () => ctx.slots?.default?.(value);
  },
  {
    props: [],
    name: name + 'ContextConsumer',
  }
);
