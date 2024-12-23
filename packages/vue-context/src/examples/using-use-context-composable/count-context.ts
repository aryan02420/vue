import { createContext } from "@aryan02420/vue-context";

const CountContext = createContext<{ count: number }>('count');

export default CountContext;
