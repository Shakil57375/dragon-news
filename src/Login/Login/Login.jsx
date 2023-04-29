import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const {loginUser} = useContext(AuthContext)
  const handleLogin = (event) =>{
    event.preventDefault()
    setError("");
    setSuccess("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
    .then(result =>{
      const loggedUser = result.user
      setSuccess("User logged in successfully")
      console.log(loggedUser);
    })
    .catch(error =>{
      setError(error.message)
      console.log(error);
    })
  }
  return (
    <Container className="w-50 mx-auto">
        <h2>Please Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" required placeholder="Enter email" />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" required placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <p className="text-success">{success}</p>
        <p className="text-danger">{error}</p>
        <Form.Text className="text-secondary">
            Don't have an account ? <Link to="/register">Register</Link>
        </Form.Text>
        <Form.Text className="text-danger">

        </Form.Text>
        <Form.Text className="text-success">

          </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
