import "./styles.css";
import React, { Fragment, useState, useEffect } from "react";

// Components
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Todo } from "./components/Todo";

export default function App() {
  const localTodos =
    localStorage.getItem("todos") === null
      ? []
      : JSON.parse(localStorage.getItem("todos"));
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(localTodos);
  const [selected, setSelected] = useState("all");
  const [filterTodos, setFilterTodos] = useState(todos);
  console.log(localTodos);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, selected]);

  const filterHandler = () => {
    switch (selected) {
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilterTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // const getLocalTodos = () => {
  //   if (localStorage.getItem("todos") === null) {
  //     localStorage.setItem("todos", JSON.stringify([]));
  //   }
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // };

  return (
    <Fragment>
      <Header />
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        selected={selected}
        setSelected={setSelected}
      />
      <Todo
        todos={todos}
        setTodos={setTodos}
        selected={selected}
        setSelected={setSelected}
        filterTodos={filterTodos}
        setFilterTodos={setFilterTodos}
      />
    </Fragment>
  );
}
