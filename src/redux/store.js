import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { movieDetailsReducer } from "./moviDetailsReducer";

const rootReducer = combineReducers({
    movieDetails: movieDetailsReducer
});
const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);