import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import UserContext from "../../context";

const CreateAClassForm = () => {
  // To Do: Connect to back end
  // Convert time to unix before sending to backend
  //Autopoulate name, level, contact and age

  const userCtx = useContext(UserContext);

  const navigate = useNavigate();
  const [classDetails, setClassDetails] = useState();
  const [sessions, setSessions] = useState();
  //react-hook-forms functionality
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    createClass({ data });
    console.log(data);
    navigate("/instructor");
  };

  const onError = (errors) => {
    console.log(errors);
  };

  const url = "https://dolphinswimschoolbackend.onrender.com";

  //To populate sessions drop down
  async function getSessions() {
    const response = await fetch(`${url}/api/sessions/get`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const jResponse = await response.json();
    console.log(jResponse);
    if (response.status === 401) {
      console.log(`${jResponse.message}`);
    } else {
      setSessions({ ...jResponse });
    }
    return jResponse;
  }

  useEffect(() => {
    getSessions();
  }, []);

  //To create a class
  async function createClass({ data }) {
    const response = await fetch(`${url}/api/classes/create`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const jResponse = await response.json();
    console.log(jResponse);
    if (response.status === 401) {
      console.log(`${jResponse.message}`);
    } else {
      setSessions({ ...jResponse });
    }
    return jResponse;
  }

  useEffect(() => {
    getSessions();
  }, []);

  return (
    <>
      <div>
        <section className="container-md" id="book_class">
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            style={{
              marginTop: "20vh",
            }}
          >
            <h5
              className="m-4"
              style={{
                color: "#FFFFFF",
              }}
            >
              <u>Instructor Details</u>
            </h5>
            <div className="form-outline m-4 row justify-content-center">
              <div className="col-md-4">
                <input
                  type="name"
                  className="form-control mt-2"
                  defaultValue={userCtx.userDetails.name}
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Please enter your name",
                    },
                  })}
                />
                <p className="text-danger text-center mt-2">
                  {errors.name?.message}
                </p>
              </div>

              <div className="col-md-4">
                <input
                  type="level"
                  className="form-control mt-2"
                  defaultValue={userCtx.userDetails.level}
                  {...register("level", {
                    required: {
                      value: true,
                      message: "Please enter your level",
                    },
                  })}
                />
                <p className="text-danger text-center mt-2">
                  {errors.level?.message}
                </p>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-2 flex-column">
                <button className="btn btn-secondary w-100 mb-4" type="submit">
                  Add Class
                </button>
                <button
                  className="btn btn-secondary w-100 mb-4"
                  type="cancel"
                  onClick={() => navigate("/")}
                >
                  Cancel
                </button>
              </div>
            </div>
            <h5
              className="m-4"
              style={{
                color: "#FFFFFF",
              }}
            >
              <u>Class Details</u>
            </h5>
            <div className="form-outline m-4 row justify-content-center">
              <div className="col-md-4">
                <input
                  type="date"
                  className="form-control mt-2"
                  placeholder="Preferred Date"
                  {...register("date", {
                    required: {
                      value: true,
                      message: "Please insert your preferred date",
                    },
                  })}
                />
                <p className="mt-2 text-danger text-center">
                  {errors.date?.message}
                </p>
              </div>

              <div className="col-md-4 mt-2">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  {...register("time", {
                    required: {
                      value: true,
                      message: "Please select your preferred time",
                    },
                  })}
                >
                  <option value="">Preferred Session</option>
                  {sessions
                    ? Object.values(sessions).map((session) => (
                        <option value={session.id}>
                          {session.start_time} - {session.end_time}
                        </option>
                      ))
                    : ""}
                </select>
                <p className="mt-2 text-danger text-center">
                  {errors.time?.message}
                </p>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-3 align-self-end">
                <img
                  src={"/swimschoollogo.png"}
                  alt="swimschoollogo"
                  width="300px"
                  style={{ transform: "translateY(-40%)" }}
                />
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};
export default CreateAClassForm;
