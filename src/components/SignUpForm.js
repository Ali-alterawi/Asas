import React from "react";
import { Link } from "react-router-dom";
import "../Css/SignUpForm.css";

const SignUpForm = () => {
  return (
    <>
      <div className="SliderService-bg">
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
              <form class="shadow p-3 rounded-4 mb-5 ">
                <h1 class="mb-4 fw-normal">Sign Up</h1>

                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Please enter your Email</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingUserName"
                    placeholder="Create User name"
                  />
                  <label for="floatingUserName">Create User name</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingPhoneNumber"
                    placeholder="Contact number"
                  />
                  <label for="floatingPhoneNumber">Contact number</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Confrim Password"
                  />
                  <label for="floatingPassword">Confrim Password</label>
                </div>
                <button class="w-100 calculator" type="submit">
                  Send
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
