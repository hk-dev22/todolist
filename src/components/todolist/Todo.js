import React from "react";
import { useSelector } from "react-redux";
import { Todoitem } from "./Todoitem";
import "../../assets/style.css";

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
