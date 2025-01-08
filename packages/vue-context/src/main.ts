import { inject } from "vue";
import type { InjectionKey } from "vue";
import { Context } from "./types.ts";
import { createContextProvider } from "./create-context-provider.ts";
import { createContextConsumer } from "./create-context-consumer.ts";

/**
 * 
 * @param name The name to be used for displaying the provider and consumer components in the devtools. Without this, the components will be displayed as <Anonymous Component>.
 * @param defaultValue The non reactive fallback value to be used when the context is not provided.
 * @returns The context object containing the Provider and Consumer components along with some metadata.
 */
export function createContext<TValue>(name: string, defaultValue?: TValue): Context<TValue> {
  const injectionKey = Symbol(name) as InjectionKey<TValue>;
  const Provider = createContextProvider<TValue>(injectionKey, name);
  const Consumer = createContextConsumer<TValue>(injectionKey, name, defaultValue);
  const context: Context<TValue> = {
    injectionKey,
    defaultValue,
    Provider,
    Consumer,
  };
  return context;
}

export function useContext<TValue>(context: Context<TValue>): TValue | undefined {
  return inject(context.injectionKey, context.defaultValue);
}
