import React from "react";

export function Form(props) {
  const inputTextHandler = (e) => {
    props.setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.setTodos([
      ...props.todos,
      {
        value: props.inputText,
        completed: false,
        id: Date.now()
      }
    ]);
    props.setInputText("");
  };

  const selectHandler = (e) => {
    props.setSelected(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="todo-input"
        onChange={inputTextHandler}
        value={props.inputText}
      />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={selectHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
