import React, {useState} from "react";
import styles from "./login.module.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const RegisterScreen = (props) => {
  // To Do: Connect to back end 
  // Solve the issue of boolean being a string
  const [userDetails, setUserDetails] = useState({});
  const navigate= useNavigate();
  
 //react-hook-forms functionality
 const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setUserDetails(data);
    handleRegister({data})
    navigate('/registersuccess')
  };

  // const user = 
  // {
  //   email: userDetails.email,
  //   password: userDetails.password
  // }
  
  const onError = (errors) => {
    console.log(errors);
  };

  console.log(userDetails)

  async function handleRegister({
    url = "http://127.0.0.1:5001/api/user/create",
    data
  }) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
         Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const jResponse = await response.json();
    console.log(jResponse);
    return jResponse;
  }

return(
<div className={`${styles.page}`}>
      <section className="container-md " id="login" style={{position:'relative', zIndex:'100'}}>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="form-outline m-4 row justify-content-center">
            <div className="col-md-4">
              <input
                type="name"
                className="form-control mt-2"
                placeholder="Name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Please enter your name"
                  },
                })}
              />
            </div>
            </div>
            <p className="mt-2 text-danger text-center">{errors.name?.message}</p>

            <div className="form-outline m-4 row justify-content-center">
            <div className="col-md-4">
              <input
                type="age"
                className="form-control mt-2"
                placeholder="Age"
                {...register("age", {
                  required: {
                    value: true,
                    message: "Please enter your age"
                  },
                })}
              />
            </div>
            </div>
            <p className="mt-2 text-danger text-center">{errors.age?.message}</p>

            <div className="form-outline m-4 row justify-content-center">
            <div className="col-md-4">
            <select class="form-select" aria-label="Default select example" 
            {...register("level", {
                required: {
                  value: true,
                  message: "Please select your level"
                },
              })}>
                <option value=''>Level</option>
                <option value='T1'>T1</option>
                <option value ='T2'>T2</option>
                <option value ='T3'>T3</option>
                <option value ='T4'>T4</option>
                <option value ='L1'>L1</option>
                <option value ='L2'>L2</option>
                <option value ='L3'>L3</option>
                <option value ='L4'>L4</option>
                <option value ='L5'>L5</option>
                <option value ='L6'>L6</option>
                <option value ='L7'>L7</option>
                <option value ='L8'>L8</option>
                <option value ='I1'>I1</option>
                <option value ='I2'>I2</option>
                <option value ='I3'>I3</option>
                <option value ='I4'>I4</option>
                <option value ='I5'>I5</option>
                <option value ='I6'>I6</option>
                <option value ='I7'>I7</option>
                <option value ='I8'>I8</option>
            </select>
            </div>
            </div>
            <p className="mt-2 text-danger text-center">{errors.level?.message}</p>

            <div className="form-outline m-4 row justify-content-center">
            <div className="col-md-4">
              <input
                type="contact"
                className="form-control mt-2"
                placeholder="Contact Number"
                {...register("contact", {
                  required: {
                    value: true,
                    message: "Please enter your contact number"
                  },
                })}
              />
            </div>
            </div>
            <p className="mt-2 text-danger text-center">{errors.contact?.message}</p>

            <div className="form-outline m-4 row justify-content-center">
            <div className="col-md-4">
            <select class="form-select" aria-label="Default select example" 
            {...register("is_instructor", {
                  required: {
                    value: true,
                    message: "Please select if you are a Student or Instructor"
                  },
                })}>
                <option value=''>Student/Instructor</option>
                <option value= "false">Student</option>
                <option value = "true">Instructor</option>
            </select>

            </div>
            </div>
            <p className="mt-2 text-danger text-center">{errors.is_instructor?.message}</p>

          <div className="form-outline m-4 row justify-content-center">
            <div className="col-md-4">
              <input
                type="email"
                className="form-control mt-2"
                placeholder="Email"
                {...register("email", {
                  required: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  },
                })}
              />
            </div>
            </div>
            <p className="mt-2 text-danger text-center">{errors.email?.message}</p>
          <div className="form-outline m-4 row justify-content-center">
            <div className="col-md-4">
              <input
                type="password"
                className="form-control mt-2"
                placeholder="Password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Please insert password"
                  },
                })}
              />
            </div>
          </div>
          <p className="mt-2 text-danger text-center">{errors.password?.message}</p>
          <div className="row dflex justify-content-center m-4">
            <button className="btn btn-secondary w-25" type='submit' onClick={()=>handleRegister}>Register</button>
          <p className="text-center">
            Existing user?{" "}
            <a
              className="link-primary"
              id="Login"
              href="/"
            >
              Login
            </a>
          </p> 
          </div>
        </form>
      </section>
      <img src="/swimschoollogo.png" alt="" style={{ transform:'translate(110%,-36%)',width: "30vw" , position:'relative', zIndex:'97'}}/>
    </div>
)
};

export default RegisterScreen;
