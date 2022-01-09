import {
  todosReducer,
  inputReducer,
  filterReducer,
  select
} from "./todolist/reducers";
import account from "./auth/reducers";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
  todosReducer,
  inputReducer,
  filterReducer,
  select,
  user: account
});
