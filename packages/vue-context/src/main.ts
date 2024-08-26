import { defineComponent, inject, provide } from "vue-demi";
import type {
  DefineSetupFnComponent,
  InjectionKey,
  Slot,
  SlotsType,
} from "vue-demi";

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
  Provider: ContextProvider<T>;
  Consumer: ContextConsumer<T>;
};

const createContextProvider = <T>(
  injectionKey: InjectionKey<T>
): ContextProvider<T> =>
  defineComponent(
    (props, ctx) => {
      provide(injectionKey, props.value);
      return () => ctx.slots?.default?.();
    },
    {
      props: ["value"],
    }
  );

const createContextConsumer = <T>(
  injectionKey: InjectionKey<T>
): ContextConsumer<T> =>
  defineComponent(
    (_, ctx) => {
      const value = inject(injectionKey);
      return () => ctx.slots?.default?.(value);
    },
    {
      props: [],
    }
  );

export function createContext<T>(name: string): Context<T> {
  const injectionKey = Symbol(name) as InjectionKey<T>;
  const Provider = createContextProvider<T>(injectionKey);
  const Consumer = createContextConsumer<T>(injectionKey);
  const context = {
    injectionKey,
    Provider,
    Consumer,
  };
  return context;
}

export function useContext<T>(context: Context<T>): T | undefined {
  return inject(context.injectionKey);
}