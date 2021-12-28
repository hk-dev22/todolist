import React from "react";
import "../assets/style.css";
import { useSelector } from "react-redux";
import { Todoitem } from "./Todoitem";

export function Todo(props) {
  const filterTodos = useSelector((state) => state.filterReducer);
  console.log(filterTodos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterTodos.map((todo) => {
          return <Todoitem key={todo.id} todo={todo} />;
        })}
      </ul>
    </div>
  );
}
