import { defineComponent, inject, provide } from "vue";
import type {
  DefineSetupFnComponent,
  InjectionKey,
  Slot,
  SlotsType,
} from "vue";

type ContextProvider<T> = DefineSetupFnComponent<
  { value: T },
  {},
  SlotsType<{ default: Slot<undefined> }>
>;
type ContextConsumer<T> = DefineSetupFnComponent<
  {},
  {},
  SlotsType<{ default?: Slot<T | undefined> }>
>;
type Context<T> = {
  injectionKey: InjectionKey<T>;
  defaultValue?: T;
  Provider: ContextProvider<T>;
  Consumer: ContextConsumer<T>;
};

const createContextProvider = <T>(
  injectionKey: InjectionKey<T>,
  name: string,
): ContextProvider<T> =>
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

const createContextConsumer = <T>(
  injectionKey: InjectionKey<T>,
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

export function createContext<T>(name: string, defaultValue?: T): Context<T> {
  const injectionKey = Symbol(name) as InjectionKey<T>;
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

export function useContext<T>(context: Context<T>): T | undefined {
  return inject(context.injectionKey, context.defaultValue);
}
