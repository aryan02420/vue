import { defineComponent, inject, toRef } from "vue";
import type { InjectionKey, Ref } from "vue";
import { ContextConsumer } from "./types.ts";

export const createContextConsumer = <TValue>(
  injectionKey: InjectionKey<Ref<TValue>>,
  name: string,
  defaultValue?: TValue
): ContextConsumer<TValue> => defineComponent(
  (_, ctx) => {
    const refDefaultValue = toRef(defaultValue) as Ref<TValue> | undefined;
    const contextValue = inject(injectionKey, refDefaultValue);
    return () => ctx.slots?.default?.(contextValue?.value);
  },
  {
    props: [],
    name: name + 'ContextConsumer',
  }
);
