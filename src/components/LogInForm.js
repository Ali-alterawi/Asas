import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/loginUser", {
        email,
        password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);

      // Redirect to the home page or any other desired route
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="SliderService-bg">
        <div class="container edit">
          <div class="sign-in">
            <div class="textSignUp">
              <h1>Sign in to </h1>
              <h2 className="my-5">Tent is simply </h2>
              <h5 className="mb-3">If you don’t have an account register</h5>
              <h5>
                You can{" "}
                <Link to="/SignUp" class="Register">
                  Register here !
                </Link>{" "}
              </h5>
            </div>
            <div class="form-login">
              <form
                class="shadow p-3 rounded-4 mb-5"
                onSubmit={handleSubmit}
              >
                <h1 class="mb-4 fw-normal">Sign in</h1>

                <div class="form-floating mb-5">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <div class="addition my-3">
                  <div class="Forgot-password my-2 text-black">
                    <Link to="/Restore">Forgot password? </Link>
                  </div>

                  <div class="checkbox my-3">
                    <label>
                      <input type="checkbox" value="remember-me" /> Remember
                      me
                    </label>
                  </div>
                </div>
                <button class="w-100 calculator" type="submit">
                  Log in
                </button>

                <div class="text-center py-4">
                  <p>or sign up with:</p>
                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fa-brands fa-square-facebook fa-2x"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fa-brands fa-google fa-2x"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogInForm;
