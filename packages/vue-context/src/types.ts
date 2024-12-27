import type {
  DefineSetupFnComponent,
  InjectionKey,
  Slot,
  SlotsType,
} from "vue";

export type AnyContextValue = Record<string, unknown>;

export type ContextProvider<TValue extends AnyContextValue> = DefineSetupFnComponent<
  { value: TValue },
  {},
  SlotsType<{ default: Slot<undefined> }>
>;

export type ContextConsumer<TValue extends AnyContextValue> = DefineSetupFnComponent<
  {},
  {},
  SlotsType<{ default?: Slot<TValue | undefined> }>
>;

export type Context<TValue extends AnyContextValue> = {
  injectionKey: InjectionKey<TValue>;
  defaultValue?: TValue;
  Provider: ContextProvider<TValue>;
  Consumer: ContextConsumer<TValue>;
};
