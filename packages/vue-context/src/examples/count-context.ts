import { createContext } from "../main";

const CountContext = createContext<{ count: number }>('count');

export default CountContext;
