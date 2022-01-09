import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutInitiate } from "../../store/actions";
import { Link } from "react-router-dom";

export function Header() {
  const { currentUser } = useSelector((state) => state.user);
  console.log("lalala");
  console.log(currentUser);
  const dispatch = useDispatch();
  const handleAuth = () => {
    if (currentUser) {
      dispatch(logoutInitiate());
    }
  };
  return (
    <>
      <header>
        <h1>Todo List</h1>
      </header>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          textAlign: "center"
        }}
      >
        <h2>Welcome</h2>
        <Link to="/login">
          <button type="button" class="btn btn-danger" onClick={handleAuth}>
            Logout
          </button>
        </Link>
      </div>
    </>
  );
}
