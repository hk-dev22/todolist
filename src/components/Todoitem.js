import React from "react";
import "../assets/style.css";

export function Todoitem(props) {
  const deleteHandler = () => {
    props.setTodos(props.todos.filter((todo) => todo.id !== props.todo.id));
  };

  const completeHandler = () => {
    props.setTodos(
      props.todos.map((item) => {
        if (item.id === props.todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <div id="todo" className="todo">
      <li className={`todo-item ${props.todo.completed ? "completed" : ""}`}>
        {props.todo.value}
      </li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check" />
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>`
      </button>
    </div>
  );
}
