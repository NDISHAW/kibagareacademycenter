import React from "react";
import { Container } from "react-bootstrap";
import Signup from "./Signup";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" ,minWidth: "100vw"}}
    >
     <div className="w-100" style={{ maxWidth: "400px" }}></div>
    </Container>
  );
}

export default App;