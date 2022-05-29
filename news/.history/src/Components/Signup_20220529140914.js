import React,{useRef} from 'react';
import { Card } from "react-bootstrap";

function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    
  return (
    <>
      <Card className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}></Card>
        <Card.Body>
        <h2 className='text-center mb-4'>
            Signup
        </h2>
        <form><
        </Card.Body>
      <div className="w-100 text-center mt-2">
        Already have an account? Login
      </div>
    </>
  )
}
export default Signup;