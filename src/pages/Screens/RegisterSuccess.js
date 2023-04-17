import React from "react";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutline";

const RegisterSuccess = () => {
  return (
    <div style={{padding: '30vh'}}>
      <h1 className="text-center" style={{color:'white'}}>Registration!</h1>
      <div
        className="d-flex justify-content-center m-5"
        style={{ transform: "scale(3)", color: "green" }}
      >
        <CheckCircleOutlinedIcon />
      </div>
      <p className="text-center fw-bold" style={{color:'white'}}>
            Proceed to login?{" "}
            <a
              className="link-primary"
              id="Login"
              href="/"
            >
              Login
            </a>
          </p>
    </div>
  );
};

export default RegisterSuccess;