import React,{useRef} from 'react';
import { Card, Form } from "react-bootstrap";

function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    
  return (
    <>
      <Card
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <Card.Body>
          <h2 className="text-center mb-4">Signup</h2>
          <form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                ref={emailRef}
                required
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                ref={passwordRef}
                required
              />
            </Form.Group>
            <Form.Group id="passwordConfirm">
              <Form.Label>password Confirmation</Form.Label>
              <Form.Control
                type="passwordConfirm"
                placeholder="passwordConfirm"
                ref={passwordConfirmRef}
                required
              />
            </Form.Group>
            <button className="btn btn-primary btn-block">Signup</button>
          </form>
        </Card.Body>
        <div className="w-100 text-center mt-2">
          Already have an account? Login
        </div>
      </Card>
    </>
  );
}
export default Signup;