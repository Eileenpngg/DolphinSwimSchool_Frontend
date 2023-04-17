import React from "react";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutline";

const CreateEventSuccess = () => {
  return (
    <div style={{padding: '30vh'}}>
      <h1 className="text-center">Event Created!</h1>
      <div
        className="d-flex justify-content-center m-5"
        style={{ transform: "scale(3)", color: "green" }}
      >
        <CheckCircleOutlinedIcon />
      </div>
      <p className="text-center">
            <a
              className="link-primary"
              id="Login"
              href="/events"
            >
              View Events
            </a>
          </p>
    </div>
  );
};

export default CreateEventSuccess;