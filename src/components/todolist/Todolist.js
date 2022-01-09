import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTodos, setFilterTodos } from "../../store/actions";
import { Form } from "./Form";
import { Header } from "./Header";
import { Todo } from "./Todo";

export function Todolist() {
  // Get the todos from local storage
  const todos = useSelector((state) => state.todosReducer);
  const selected = useSelector((state) => state.select);
  const dispatch = useDispatch();

  const filterHandler = () => {
    switch (selected) {
      case "completed":
        dispatch(
          setFilterTodos(todos.filter((todo) => todo.completed === true))
        );
        break;
      case "uncompleted":
        dispatch(
          setFilterTodos(todos.filter((todo) => todo.completed === false))
        );
        break;
      default:
        dispatch(setFilterTodos(todos));
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, selected, dispatch]);
  return (
    <>
      <Header />
      <Form />
      <Todo />
    </>
  );
}
