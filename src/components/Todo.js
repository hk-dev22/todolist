import React from "react";
import "../assets/style.css";

import { Todoitem } from "./Todoitem";

export function Todo(props) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.filterTodos.map((todo) => {
          return (
            <Todoitem
              key={todo.id}
              todo={todo}
              todos={props.todos}
              setTodos={props.setTodos}
            />
          );
        })}
      </ul>
    </div>
  );
}
