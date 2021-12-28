//
export const setInputText = (input) => {
  return {
    type: "CHANGE_INPUT",
    payload: input
  };
};
export const setTodos = (todo) => {
  return {
    type: "SET_TODOS",
    payload: todo
  };
};
export const setFilterTodos = (todo) => {
  return {
    type: "SET_FILTER",
    payload: todo
  };
};

export const selectFilter = (value) => {
  return {
    type: "SELECT_FILTER",
    payload: value
  };
};
