import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import data from "./data";

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  data: data
});
