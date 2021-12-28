import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInputText, setTodos, selectFilter } from "../store/actions";

export function Form(props) {
  const inputText = useSelector((state) => state.inputReducer);
  const todos = useSelector((state) => state.todosReducer);
  const dispatch = useDispatch();

  const inputTextHandler = (e) => {
    dispatch(setInputText(e.target.value));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      dispatch(
        setTodos([
          ...todos,
          {
            value: inputText,
            completed: false,
            id: Date.now()
          }
        ])
      );
      dispatch(setInputText(""));
    }
  };

  const selectHandler = (e) => {
    dispatch(selectFilter(e.target.value));
  };

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <input
        type="text"
        className="todo-input"
        onChange={(e) => inputTextHandler(e)}
        value={inputText}
      />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select
          name="todos"
          className="filter-todo"
          onChange={(e) => selectHandler(e)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
