import React, { useRef, useEffect } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { loginInitiate } from "../../store/actions";
import { Link, useNavigate } from "react-router-dom";

export function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(currentUser);
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email && password) {
      dispatch(loginInitiate(email, password));
    }
  };

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Login</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Button
                  className="btn btn-danger btn-block w-100"
                  type="submit"
                >
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Dont' have an account? Sign Up
            <Link to="/register">
              <button
                className="btn btn-secondary btn-block"
                type="button"
                id="btn-signup"
              >
                <i className="fas fa-angle-left"></i> Back
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
