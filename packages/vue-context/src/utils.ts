import {
  createContext as createContextRaw,
  useContext as useContextRaw,
} from "./main.ts";

export function createContext<T extends Record<string, unknown>>(name: string) {
  const rawContext = createContextRaw<T>(name);

  function useContext() {
    const value = useContextRaw(rawContext);
    if (value === undefined) {
      throw new Error(
        `useContext must be used inside "${name}" ContextProvider`
      );
    }
    return value as T;
  }

  return { Provider: rawContext.Provider, useContext };
}
