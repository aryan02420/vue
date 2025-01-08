import { inject, provide } from "vue";
import type { InjectionKey } from "vue";
import type { AnyContextValue } from "./types.ts";

export function createContext<TValue extends AnyContextValue>(name: string) {
  const injectionKey = Symbol(name) as InjectionKey<TValue>;
  
  function useContextProvider(value: TValue) {
    provide(injectionKey, value);
  }

  function useContext() {
    const value = inject(injectionKey);
    if (value === undefined) {
      throw new Error(
        `useContext must be used inside "${name}" ContextProvider`
      );
    }
    return value;
  }

  return { useContextProvider, useContext };
}
