import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTodos, setFilterTodos } from "./store/actions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import { Todolist } from "./components/todolist/Todolist";

import { Signup } from "./components/auth/Signup";
import { Login } from "./components/auth/Login";

import auth from "./firebase";
import { setUser } from "./store/auth/actions";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Todolist />} />
          <Route exact path="/register" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          {/* <Header />
          <Form />
          <Todo /> */}
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}
