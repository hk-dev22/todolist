import "./styles.css";
import React, { Fragment, useState, useEffect } from "react";

// Components
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Todo } from "./components/Todo";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [selected, setSelected] = useState("all");
  const [filterTodos, setFilterTodos] = useState(todos);

  useEffect(() => {
    filterHandler();
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
        filterTodos={filterTodos}
        setFilterTodos={setFilterTodos}
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
