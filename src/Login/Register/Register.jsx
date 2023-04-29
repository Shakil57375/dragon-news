import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div>
      <Container className="w-50 mx-auto">
        <h2>Please Register</h2>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
                type="text"
                name="name"
                required
                placeholder="Enter email"
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
                type="text"
                name="photo"
                required
                placeholder="Enter photo URL"
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
                type="email"
                name="email"
                required
                placeholder="Enter name"
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                name="password"
                required
                placeholder="Password"
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" name="accept" label="Accept terms and conditions" />
            </Form.Group>

            <Button variant="primary" type="submit">
            Register
            </Button>
            <br />
            <Form.Text className="text-secondary">
            Already have an account? <Link to="/login">Login</Link>
            </Form.Text>
            <Form.Text className="text-danger"></Form.Text>
            <Form.Text className="text-success"></Form.Text>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
