import React from "react";
import { Link } from "react-router-dom";

const RestoreForm = () => {
  return (
    <>
      <div className="SliderService-bg">
        <div class="container">
          <div class="sign-in">
            <div class="textSignUp">
              <h1 className="my-5 text-capitalize">restore your password in </h1>
              <h2 className="my-3">ASAS is simply </h2>
              <h5 className="my-3">
                If you have any issued, please contact us directly by
                <Link onClick={() => window.location = 'mailto:alielterawe@gmail.com'} className=" text-decoration-none text-white ms-2" >E-mail</Link>
              </h5>
            </div>
            <div class="form-login">
              <form class="shadow p-3 rounded-4 mb-5 ">
                <h2 class=" font-weight-bold mb-3 fw-normal">
                  Did you forget your password?
                </h2>

                <div class="form-floating mb-5">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Please enter your Email</label>
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

export default RestoreForm;
