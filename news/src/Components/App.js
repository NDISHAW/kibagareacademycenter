import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Signup from "./Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <Container>
      <row>
        <col>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </col>
      </row>
    </Container>
  );
}

export default App;



    // <AuthProvider>
    //   <Container
    //     className="d-flex align-items-center justify-content-center"
    //     style={{ minHeight: "100vh", minWidth: "100vw" }}
    //   >
    //     <div className="w-100" style={{ maxWidth: "400px" }}>
    //       <Signup />
    //     </div>
    //   </Container>
    // </AuthProvider>