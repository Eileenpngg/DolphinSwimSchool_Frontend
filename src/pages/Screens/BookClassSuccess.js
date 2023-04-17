import React from "react";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutline";
import { Link } from "react-router-dom";
const BookClassSuccess = () => {
  return (
    <div style={{padding: '30vh'}}>
      <h1 className="text-center" style={{color: 'white'}}>Booked Class!</h1>
      <div
        className="d-flex justify-content-center m-5"
        style={{ transform: "scale(3)", color: "green" }}
      >
        <CheckCircleOutlinedIcon />
      </div>
      <p className="text-center fw-bold">
            <Link
              className="link-primary"
              id="Login"
              to="/book-a-class"
            >
              Book Another Class
            </Link>
          </p>
    </div>
  );
};

export default BookClassSuccess;







