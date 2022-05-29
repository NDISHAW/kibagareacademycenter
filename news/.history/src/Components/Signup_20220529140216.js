import React,{useRef} from 'react';
import {Form, Button, Card} from "react-bootstrap";

function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    
  return (
    <>
      <Card className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
          
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
}

export default Signup;