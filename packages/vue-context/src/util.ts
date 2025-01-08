import {
  createContext as createVanillaContext,
  useContext as useVanillaContext,
} from "./main.ts";
import type { AnyContextValue } from "./types.ts";

export function createContext<TValue extends AnyContextValue>(name: string) {
  const vanillaContext = createVanillaContext<TValue>(name);

  function useContext() {
    const value = useVanillaContext(vanillaContext);
    if (value === undefined) {
      throw new Error(
        `useContext must be used inside "${name}" ContextProvider`
      );
    }
    return value;
  }

  return { Provider: vanillaContext.Provider, useContext };
}
