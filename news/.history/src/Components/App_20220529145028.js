import React from "react";
import { Container } from "react-bootstrap";
import Signup from "./Signup";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <AuthProvider>
      
    </AuthProvider>
  );
}

export default App;
