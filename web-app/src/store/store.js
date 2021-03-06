import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import moviesReducer from "./reducers/moviesReducer";

const rootReducer = combineReducers({ moviesReducer });

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
