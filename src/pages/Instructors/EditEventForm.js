import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const EditEventForm = ({ event }) => {
  const navigate = useNavigate();
  const [id, setId]= useState();

  //react-hook-forms functionality
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    updateEvent({data})
    navigate("/events");
  };

  const onError = (errors) => {
    console.log(errors);
  };

  const handleClick = (e) => {
    setId(e.target.value)
  };

  //To edit event
    async function updateEvent({
      url = `http://127.0.0.1:5001/api/events/${id}`,
      data
    }) {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });
      const jResponse = await response.json();
      console.log(jResponse);
      if (response.status === 401) {
        console.log(`${jResponse.message}`);
      } 
      return jResponse;  }

  return (
    <>
      <button
        value={event.id}
        className="btn btn-secondary w-25"
        type="button"
        data-bs-toggle="modal"
        data-bs-target={`#myModal${event.id}`}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Edit Event
      </button>

      <div class="modal" id={`myModal${event.id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Event</h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <div class="modal-body">
                <input
                  type="text"
                  placeholder="Title"
                  className="form-control mt-2"
                  defaultValue={event.title}
                  {...register("title", {
                    required: {
                      message: "Please insert title",
                    },
                  })}
                />
                <input
                  type="text"
                  placeholder="Image url"
                  className="form-control mt-2"
                  defaultValue={event.image}
                  {...register("image", {
                    required: {
                      message: "Please insert image url",
                    },
                  })}
                />
                <textarea
                  type="text"
                  placeholder="Insert description"
                  className="form-control mt-2"
                  defaultValue={event.description}
                  {...register("description", {
                    required: {
                      message: "Please insert description",
                    },
                  })}
                />

                <input
                  type="date"
                  className="form-control mt-2"
                  defaultValue={event.start_date}
                  {...register("start_date", {
                    required: {
                      message: "Please insert start_date",
                    },
                  })}
                />

                <input
                  type="date"
                  className="form-control mt-2"
                  defaultValue={event.end_date}
                  {...register("end_date", {
                    required: {
                      message: "Please insert end_date",
                    },
                  })}
                />
                <input
                  type="time"
                  className="form-control mt-2"
                  defaultValue={event.start_time}
                  {...register("start_time", {
                    required: {
                      message: "Please insert start time",
                    },
                  })}
                />
                <input
                  type="time"
                  className="form-control mt-2"
                  defaultValue={event.end_time}
                  {...register("end_time", {
                    required: {
                      message: "Please insert end time",
                    },
                  })}
                />
              </div>

              <div class="modal-footer">
                <button type="submit" class="btn btn-warning"> 
                  Edit
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );

};
export default EditEventForm;
