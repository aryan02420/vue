import { createContext } from "@aryan02420/vue-context";

const DEFAULT_VALUE = { count: 42 };

const CountContext = createContext<{ count: number }>('count', DEFAULT_VALUE);

export default CountContext;
