import type {
  DefineSetupFnComponent,
  InjectionKey,
  Ref,
  Slot,
  SlotsType,
} from "vue";

export type ContextProvider<TValue> = DefineSetupFnComponent<
  { value: TValue },
  {},
  SlotsType<{ default: Slot<undefined> }>
>;

export type ContextConsumer<TValue> = DefineSetupFnComponent<
  {},
  {},
  SlotsType<{ default?: Slot<TValue | undefined> }>
>;

export type Context<TValue> = {
  injectionKey: InjectionKey<Ref<TValue>>;
  defaultValue?: TValue;
  Provider: ContextProvider<TValue>;
  Consumer: ContextConsumer<TValue>;
};
