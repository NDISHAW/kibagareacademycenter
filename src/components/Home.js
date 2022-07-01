import React from "react";
import { Button , Table} from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import Students from "./Students";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div style={{ width: "400px", display: "flex" }}>
        <div>
          <div className="p-4 box mt-3 text-center text-white ">
            Hello Welcome <br />
            {user && user.email}
          </div>
          <div className="d-grid gap-2">
            <Button variant="primary" onClick={handleLogout}>
              Log out
            </Button>
          </div>
        </div>
      </div>
      <Table>
        <Students />
      </Table>
    </>
  );
};

export default Home;
