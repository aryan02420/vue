import { createContext } from "../../utils";

const {
	Provider: CountProvider,
	useContext: useCount
} = createContext<{ count: number }>('count');

export {
	CountProvider,
	useCount
};
