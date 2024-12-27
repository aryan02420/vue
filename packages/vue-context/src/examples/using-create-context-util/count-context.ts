import { createContext } from "@aryan02420/vue-context/util";

const {
	Provider: CountProvider,
	useContext: useCount
} = createContext<{ count: number }>('count');

export {
	CountProvider,
	useCount
};
