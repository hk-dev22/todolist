const localTodos =
  localStorage.getItem("todos") === null
    ? []
    : JSON.parse(localStorage.getItem("todos"));

export const todosReducer = (state = localTodos, action) => {
  switch (action.type) {
    case "SET_TODOS":
      return action.payload;
    default:
      return state;
  }
};

export const inputReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return action.payload;
    default:
      return state;
  }
};

export const filterReducer = (state = localTodos, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.payload;
    default:
      return state;
  }
};

export const select = (state = "all", action) => {
  switch (action.type) {
    case "SELECT_FILTER":
      return action.payload;
    default:
      return state;
  }
};
