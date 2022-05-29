import React from "react";
import { Container } from "react-bootstrap";
import Signup from "./Signup";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container
      className="d-flex align-items- justify-content-center"
      style={{ minHeight: "100vh" ,minWidth: "100vw"}}
    >
      <Signup/>
    </Container>
  );
}

export default App;
