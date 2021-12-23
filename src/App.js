import "./styles.css";
import React, { Fragment } from "react";

// Components
import { Header } from "./components/Header";
import { Todo } from "./components/Todo";

export default function App() {
  return (
    <Fragment>
      <Header />
      <Todo />
    </Fragment>
  );
}
