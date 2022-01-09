import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { setTodos } from "../../store/actions";

export function Todoitem(props) {
  const todos = useSelector((state) => state.todosReducer);
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(setTodos(todos.filter((todo) => todo.id !== props.todo.id)));
  };

  const completeHandler = () => {
    dispatch(
      setTodos(
        todos.map((item) => {
          if (item.id === props.todo.id) {
            return { ...item, completed: !item.completed };
          }
          return item;
        })
      )
    );
  };

  return (
    <div id="todo" className="todo">
      <li className={`todo-item ${props.todo.completed ? "completed" : ""}`}>
        {props.todo.value}
      </li>
      <button className="complete-btn" onClick={() => completeHandler()}>
        <i className="fas fa-check" />
      </button>
      <button className="trash-btn" onClick={() => deleteHandler()}>
        <i className="fas fa-trash"></i>`
      </button>
    </div>
  );
}
