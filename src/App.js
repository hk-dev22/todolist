import "./styles.css";
import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTodos, setFilterTodos } from "./store/actions";

// Components
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Todo } from "./components/Todo";

export default function App() {
  // Get the todos from local storage
  const todos = useSelector((state) => state.todosReducer);
  const selected = useSelector((state) => state.select);
  const dispatch = useDispatch();

  const localTodos =
    localStorage.getItem("todos") === null
      ? []
      : JSON.parse(localStorage.getItem("todos"));

  // (() => {
  //   dispatch(setTodos(localTodos));
  // })();

  // const [inputText, setInputText] = useState("");
  // const [todos, setTodos] = useState(localTodos);
  // const [selected, setSelected] = useState("all");
  // const [filterTodos, setFilterTodos] = useState(todos);

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
    <Fragment>
      <Header />
      <Form />
      <Todo />
    </Fragment>
  );
}
