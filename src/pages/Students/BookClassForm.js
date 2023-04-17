import React, { useState, useContext, useEffect } from "react";
import { isRouteErrorResponse, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import UserContext from "../../context";

const BookClassForm = () => {
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();
  const [classes, setClasses] = useState();
  const [date, setDate] = useState();
  const [instructor, setInstructor] = useState();
  const [instructor_name, setInstructorName] = useState("");
  const [time, setTime] = useState();

  //react-hook-forms functionality
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    bookClass()
    console.log(data);
    updatePackage()
    navigate("/book-class-success");
  };

  const onError = (errors) => {
    console.log(errors);
  };


  //Populates the classes available when date is selected
  async function getClasses({
    url = "http://127.0.0.1:5001/api/classes/get",
    level,
    date,
  }) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ level, date }),
    });
    const jResponse = await response.json();
    if (response.status === 401) {
      console.log(`${jResponse.message}`);
    } else {
      setClasses({ ...jResponse });
    }
    return jResponse;
  }

  //Populates instructor name 
  async function getInstructor({
    url = "http://127.0.0.1:5001/api/instructors/get",
    level,
    date,
    time,
  }) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ level, date, time }),
    });
    const jResponse = await response.json();
    if (response.status === 401) {
      console.log(`${jResponse.message}`);
    } else {
      setInstructor({ ...jResponse });
    }
    console.log(jResponse);
    return jResponse;
  }

  //Submits form and populates data
  async function bookClass(
    url = "http://127.0.0.1:5001/api/class/book", 
    data= {user_id: userCtx.userDetails.id,
      level: userCtx.userDetails.level,
      date,
      time,}) 
      {
    const response = await fetch(url, {
      method: "POST",
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
    } else {
      console.log({ ...jResponse });
    }
    return jResponse;  
  }

  //Updates packages
  async function updatePackage(
    url= `http://127.0.0.1:5001/api/packages/${userCtx.userDetails.id}`,
  ){
    const response= await fetch(url,{
      method:'DELETE',
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
    })
    const jResponse= await response.json();
    console.log(jResponse)
    if (response.status===401){
      console.log(`${jResponse.message}`)
    } else{
      console.log({...jResponse})
    }
    return jResponse
  }


  //Use Effects
  useEffect(() => {
    if (date !== undefined) {
      getClasses({ level: userCtx.userDetails.level, date });
    }
  }, [date, userCtx.userDetails.level]);

  useEffect(() => {
    if (
      userCtx.userDetails.level !== undefined &&
      date !== undefined &&
      time !== undefined
    ) {
      getInstructor({ level: userCtx.userDetails.level, date, time });
    }
  }, [classes, time, userCtx.userDetails.level, date]);

  useEffect(() => {
    if (instructor && instructor[0]) {
      setInstructorName(instructor[0].instructor_name);
    }
  }, [instructor]);

  return (
    <div>
      <section className="container-md" id="book_class">
        <form onSubmit={handleSubmit(onSubmit, onError)} style={{marginTop:'10vh'}}>
          <h5 className="m-4" style={{color:'#FFFFFF'}}>
            <u>Student Details</u>
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
                type="age"
                className="form-control mt-2"
                defaultValue={userCtx.userDetails.age}
                {...register("age", {
                  required: {
                    value: true,
                    message: "Please enter your age",
                  },
                })}
              />
              <p className="text-danger text-center mt-2">
                {errors.age?.message}
              </p>
            </div>
            <div className="col-md-4"></div>
          </div>

          <div className="form-outline m-4 row justify-content-center">
            <div className="col-md-4">
              <input
                type="level"
                className="form-control "
                defaultValue={userCtx.userDetails.level}
                {...register("level", {
                  required: {
                    value: true,
                    message: "Please select your level",
                  },
                })}
              />

              <p className="mt-2 text-danger text-center">
                {errors.level?.message}
              </p>
            </div>

            <div className="col-md-4">
              <input
                type="contact"
                className="form-control"
                placeholder="Contact Number"
                defaultValue={userCtx.userDetails.contact}
                {...register("contact", {
                  required: {
                    value: true,
                    message: "Please enter your contact number",
                  },
                })}
              />
              <p className="mt-2 text-danger text-center">
                {errors.contact?.message}
              </p>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-2 flex-column" style={{zIndex:'99'}}>
              <button className="btn btn-secondary w-100 mb-4" type="submit">
                Book Class
              </button>
              <button className="btn btn-secondary w-100 mb-4" type="submit" onClick={() => navigate("/")}>
                Cancel
              </button>
            </div>
          </div>

          <h5 className="m-4" style={{color:'#FFFFFF'}}>
            <u>Booking Details</u>
          </h5>
          <div className="form-outline m-4 row justify-content-center" style={{height:'10vw'}}>
            <div className="col-md-4">
              <input
                type="date"
                className="form-control"
                placeholder="Preferred Date"
                onFocus={(e) => setDate(e.target.value)}
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

            <div className="col-md-4">
              <select
                class="form-select"
                aria-label="Default select example"
                value={time}
                {...register("time", {
                  required: {
                    value: true,
                    message: "Please select your preferred time",
                  },
                  onChange: (e) => setTime(e.target.value),
                })}
              >
                {classes ? (
                  Object.keys(classes)?.length !== 0 ? (
                    <option key="-1" value="-1">
                      Preferred Session
                    </option>
                  ) : (
                    <option>"No sessions available for this date"</option>
                  )
                ) : (
                  ""
                )}
                {classes ? (
                  Object.keys(classes)?.length !== 0 ? (
                    Object.values(classes).map((aClass) => (
                      <option
                        key={aClass.id}
                        value={aClass.id}
                        onFocus={(e) => setDate(e.target.value)}
                      >
                        {aClass.start_time} - {aClass.end_time}
                      </option>
                    ))
                  ) : (
                    <option key={classes.id} value={classes.id}>
                      {classes.start_time} - {classes.end_time}
                    </option>
                  )
                ) : (
                  ""
                )}
              </select>
              <p className="mt-2 text-danger text-center">
                {errors.time?.message}
              </p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-3 align-self-end">
              <img src={'/swimschoollogo.png'} alt="swimschoollogo" width="300px" style={{transform:'translateY(-50%)'}}/>
            </div>
          </div>
          <div className="form-outline row justify-content-center">
            <div className="col-md-4">
              <input
                type="instructor_name"
                className="form-control"
                placeholder="Instructor Name"
                defaultValue={instructor_name}
                {...register("instructor_name")}
              />
              <p className="mt-2 text-danger text-center">
              </p>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default BookClassForm;
