import Router from "json-server/lib/server/router";
import React from "react";
import { Container } from "react-bootstrap";
import Signup from "./Signup";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100 " style={{maxWidth: "400px"}}>
        <Router>
          <auth
        </Router>
      </div>
      <Signup />
    </Container>
  );
}

export default App;