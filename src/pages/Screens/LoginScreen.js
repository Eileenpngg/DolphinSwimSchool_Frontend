import React, { useState, useContext } from "react";
import styles from "./login.module.css";
import { useForm } from "react-hook-form";
import UserContext from "../../context";

const LoginScreen = (props) => {
  const [loginDetails, setLoginDetails] = useState();
  const userCtx = useContext(UserContext);

  //react-hook-forms functionality
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleLogin({ data });
  };
  const onError = (errors) => {
    console.log(errors);
  };

  const url = "https://dolphinswimschoolbackend.onrender.com";

  async function handleLogin({ data = loginDetails }) {
    const response = await fetch(`${url}/api/user/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const jResponse = await response.json();
    console.log(jResponse);
    if (response.status === 401 || response.status === 500) {
      console.log(response);
      alert(jResponse);
    } else {
      userCtx.setUserDetails({ ...jResponse });
    }
    return jResponse;
  }

  return (
    <>
      <div className={`${styles.page} `}>
        <section className="container-md justify-content-center " id="login">
          <form
            className={`${styles.form}`}
            onSubmit={handleSubmit(onSubmit, onError)}
          >
            <div
              className="justify-content-center"
              style={{ paddingTop: "20vh", paddingBottom: "10vh" }}
            >
              <div className="form-outline m-4 row justify-content-center">
                <div className="col-md-4">
                  <input
                    type="email"
                    className="form-control mt-4"
                    placeholder="Email"
                    {...register("email", {
                      required: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address",
                      },
                    })}
                  />
                </div>
              </div>
              <p className="mt-2 text-danger text-center">
                {errors.email?.message}
              </p>
              <div className="form-outline m-4 row justify-content-center">
                <div className="col-md-4" style={{ zIndex: "98" }}>
                  <input
                    type="password"
                    className="form-control mt-2"
                    placeholder="Password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Please insert password",
                      },
                    })}
                  />
                </div>
              </div>
              <p className="mt-2 text-danger text-center">
                {errors.password?.message}
              </p>
              <div className="row dflex justify-content-center m-4">
                <button
                  className="btn btn-secondary w-25"
                  type="submit"
                  style={{ zIndex: "99" }}
                >
                  LOGIN
                </button>
                <p className="text-center" style={{ zIndex: "99" }}>
                  Not a user?{" "}
                  <a
                    className="link-primary"
                    onClick={props.handleScreenChange}
                    id="Register"
                    href="/register"
                  >
                    Register
                  </a>
                </p>
              </div>
              <div className="row dflex justify-content-center m-4">
                <img
                  src="/swimschoollogo.png"
                  alt=""
                  style={{ transform: "translateY(-38%)", width: "30vw" }}
                />
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default LoginScreen;
