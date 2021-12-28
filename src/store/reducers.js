import { combineReducers } from "redux";

const localTodos =
  localStorage.getItem("todos") === null
    ? []
    : JSON.parse(localStorage.getItem("todos"));

const todosReducer = (state = localTodos, action) => {
  switch (action.type) {
    case "SET_TODOS":
      return action.payload;
    default:
      return state;
  }
};

const inputReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return action.payload;
    default:
      return state;
  }
};

const filterReducer = (state = localTodos, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.payload;
    default:
      return state;
  }
};

const select = (state = "all", action) => {
  switch (action.type) {
    case "SELECT_FILTER":
      return action.payload;
    default:
      return state;
  }
};

export const allReducers = combineReducers({
  todosReducer,
  inputReducer,
  filterReducer,
  select
});
