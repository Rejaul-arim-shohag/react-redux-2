import { createStore } from "redux";
// import counterReducer from "./counter/counterReducer";
// import dynamicCounterReducer from "./dynamicHooksCounter/dynamicCounterReducer";
import rootReducer from "./rootReducer";
const store = createStore(rootReducer)
export default store