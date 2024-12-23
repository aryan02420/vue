import { defineComponent, inject, provide } from "vue";
import type {
  DefineSetupFnComponent,
  InjectionKey,
  Reactive,
  Slot,
  SlotsType,
} from "vue";

type MaybeReactive<T> = Reactive<T> | T;
export type AnyContextValue = Record<string, unknown>;

type ContextProvider<TValue extends AnyContextValue> = DefineSetupFnComponent<
  { value: TValue },
  {},
  SlotsType<{ default: Slot<undefined> }>
>;
type ContextConsumer<TValue extends AnyContextValue> = DefineSetupFnComponent<
  {},
  {},
  SlotsType<{ default?: Slot<MaybeReactive<TValue> | undefined> }>
>;
type Context<TValue extends AnyContextValue> = {
  injectionKey: InjectionKey<MaybeReactive<TValue>>;
  defaultValue?: TValue;
  Provider: ContextProvider<TValue>;
  Consumer: ContextConsumer<TValue>;
};

const createContextProvider = <TValue extends AnyContextValue>(
  injectionKey: InjectionKey<MaybeReactive<TValue>>,
  name: string,
): ContextProvider<TValue> =>
  defineComponent(
    (props, ctx) => {
      provide(injectionKey, props.value);
      return () => ctx.slots?.default?.();
    },
    {
      props: ["value"],
      name: name + 'ContextProvider'
    }
  );

const createContextConsumer = <TValue extends AnyContextValue>(
  injectionKey: InjectionKey<MaybeReactive<TValue>>,
  name: string,
  defaultValue?: TValue,
): ContextConsumer<TValue> =>
  defineComponent(
    (_, ctx) => {
      const value = inject(injectionKey, defaultValue);
      return () => ctx.slots?.default?.(value);
    },
    {
      props: [],
      name: name + 'ContextConsumer',
    }
  );

/**
 * 
 * @param name The name to be used for displaying the provider and consumer components in the devtools. Without this, the components will be displayed as <Anonymous Component>.
 * @param defaultValue The non reactive fallback value to be used when the context is not provided.
 * @returns The context object containing the Provider and Consumer components along with some metadata.
 */
export function createContext<TValue extends AnyContextValue>(name: string, defaultValue?: TValue): Context<TValue> {
  const injectionKey = Symbol(name) as InjectionKey<MaybeReactive<TValue>>;
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

export function useContext<TValue extends AnyContextValue>(context: Context<TValue>): MaybeReactive<TValue> | undefined {
  return inject(context.injectionKey, context.defaultValue);
}
