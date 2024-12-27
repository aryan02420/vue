import { createContext } from "../../util.ts";

const {
	Provider: CountProvider,
	useContext: useCount
} = createContext<{ count: number }>('count');

export {
	CountProvider,
	useCount
};
