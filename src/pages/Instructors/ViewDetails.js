import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const ViewDetails = ({ event }) => {
  const navigate = useNavigate();
  const [id, setId]=useState()
  const [students, setStudents]= useState();

  const handleClick = (e) => {
    setId(e.target.value)
    console.log(id)
  };

  useEffect(()=>{
    getDetails()
    },[id])

  //To edit event
    async function getDetails(
      url = `http://127.0.0.1:5001/api/event/student/${id}`
    ) {
      const response = await fetch(url, {
        method: "get",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        }
      });
      const jResponse = await response.json();
      console.log(jResponse);
      if (response.status === 401) {
        console.log(`${jResponse.message}`);
      } else {
        setStudents({...jResponse})
        console.log(students)
      }
      return jResponse;  }

  return (
    <>
      <button
        value={event.id}
        className="btn btn-secondary w-25 mt-4"
        type="button"
        data-bs-toggle="modal"
        data-bs-target={`#details${event.id}`}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        View Details
      </button>

      <div class="modal" id={`details${event.id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">View Details</h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div class="modal-body">
            <h1 className="display-8 text-center"><b><u>List of students</u></b></h1>
            {students?Object.values(students).map((name)=><p className="text-center">{name.name}</p>):""}
            </div>

                <button
                  type="button"
                  class="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
          </div>
      </div>
    </>
  );

};
export default ViewDetails;
