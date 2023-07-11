import React, { useRef } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import "../Css/SignUpForm.css";

const SignUpForm = () => {
  const formRef = useRef(null);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      role: 1,
      userName: event.target.elements.userName.value,
      email: event.target.elements.email.value,
      phone: event.target.elements.phone.value,
      password: event.target.elements.password.value,
    };
    console.log(formData);
    try {
      const res = await axios.post("http://localhost:8000/User", formData);
      console.log("Form data sent successfully to server from react");
      formRef.current.reset();
    } catch (error) {
      console.log("Error sending form from react:", error);
    }
  };
  return (
    <>
      <div className="Partner-bg">
        <div class="container edit">
          <div class="sign-in">
            <div class="textSignUp">
              <h1>Sign Up to </h1>
              <h2 className="my-5">Tent is simply </h2>
              <h5 className="mb-3">If you already have an account </h5>
              <h5>
                You can{" "}
                <Link to="/LogIn" class="Register fw-bold">
                  Login here !
                </Link>
              </h5>
            </div>
            <div class="form-login mb-5 ">
              <form
                class="shadow p-3 rounded-4 mb-5 "
                onSubmit={handleSubmit}
                ref={formRef}
              >
                <h1 class="mb-4 fw-normal">Sign Up</h1>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingUserName"
                    placeholder="Create User name"
                    name="userName"
                  />
                  <label for="floatingUserName">Create User name</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    name="email"
                  />
                  <label for="floatingInput">Please enter your Email</label>
                </div>

                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingPhoneNumber"
                    placeholder="Contact number"
                    name="phone"
                  />
                  <label for="floatingPhoneNumber">Contact number</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    name="password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <button class="w-100 calculator" type="submit">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
