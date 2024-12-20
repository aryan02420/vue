import { defineComponent, inject, provide, reactive } from "vue";
import type {
  DefineSetupFnComponent,
  InjectionKey,
  Reactive,
  Slot,
  SlotsType,
} from "vue";

type MaybeReactive<T> = Reactive<T> | T;
type ContextValue = Record<string, unknown>;
type ContextProvider<T extends ContextValue> = DefineSetupFnComponent<
  { value: T },
  {},
  SlotsType<{ default: Slot<undefined> }>
>;
type ContextConsumer<T extends ContextValue> = DefineSetupFnComponent<
  {},
  {},
  SlotsType<{ default?: Slot<MaybeReactive<T> | undefined> }>
>;
type Context<T extends ContextValue> = {
  injectionKey: InjectionKey<MaybeReactive<T>>;
  defaultValue?: T;
  Provider: ContextProvider<T>;
  Consumer: ContextConsumer<T>;
};

const createContextProvider = <T extends ContextValue>(
  injectionKey: InjectionKey<MaybeReactive<T>>,
  name: string,
): ContextProvider<T> =>
  defineComponent(
    (props, ctx) => {
      const contextValue = reactive(props.value);
      provide(injectionKey, contextValue);
      return () => ctx.slots?.default?.();
    },
    {
      props: ["value"],
      name: name + 'ContextProvider'
    }
  );

const createContextConsumer = <T extends ContextValue>(
  injectionKey: InjectionKey<MaybeReactive<T>>,
  name: string,
  defaultValue?: T,
): ContextConsumer<T> =>
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
export function createContext<T extends ContextValue>(name: string, defaultValue?: T): Context<T> {
  const injectionKey = Symbol(name) as InjectionKey<MaybeReactive<T>>;
  const Provider = createContextProvider<T>(injectionKey, name);
  const Consumer = createContextConsumer<T>(injectionKey, name, defaultValue);
  const context: Context<T> = {
    injectionKey,
    defaultValue,
    Provider,
    Consumer,
  };
  return context;
}

export function useContext<T extends ContextValue>(context: Context<T>): MaybeReactive<T> | undefined {
  return inject(context.injectionKey, context.defaultValue);
}
