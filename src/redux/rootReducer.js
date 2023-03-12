import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import dynamicCounterReducer from "./dynamicHooksCounter/dynamicCounterReducer";
const rootReducer = combineReducers({
    counter: counterReducer,
    dynamicCounter: dynamicCounterReducer
})
export default rootReducer;