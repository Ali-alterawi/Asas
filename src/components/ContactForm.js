import React from "react";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiEmail, mdiPhone, mdiGoogleMaps } from "@mdi/js";
import "../Css/ContactForm.css";

const ContactForm = () => {
  const mystyle = {
    color: "#fff",
    backgroundColor: "#064080",
  };
  return (
    <>
      <div className="container text-center my-5">
        <div className="row justify-content-between">
          <div className= "col-lg-3 col-md-12 card-contact ">
            <div className="icon text-center">
              <Icon path={mdiGoogleMaps} size={2} />
            </div>
            <div className="text">
              <h3>OFFICE ADDRESS</h3>
              <p>380 St Khalda Road, Amman 3004, Jordan</p>
            </div>
          </div>
          <div className=" col-lg-3 col-md-12 card-contact ">
            <div className="icon text-center">
              <Icon path={mdiPhone} size={2} />
            </div>
            <div className="text">
              <h3>Phone:</h3>
              <p>+ 1234 4567 89</p>
              <p>+ 1234 4567 89</p>
            </div>
          </div>
          <div className=" col-lg-3 col-md-12 card-contact ">
            <div className="icon text-center">
              <Icon path={mdiEmail} size={2} />
            </div>
            <h3>MESSAGE US:</h3>
            <p>
              E-mail :{" "}
              <Link
                to="support@example.com"
                target="_blank"
                className="text-blue text-decoration-none"
              >
                support@tent.com
              </Link>
            </p>
            <p>
              E-mail :{" "}
              <Link
                to="info@example.com"
                target="_blank"
                className="text-blue text-decoration-none"
              >
                info@tent.com
              </Link>
            </p>
          </div>
        </div>
      </div>
      <form className="container my-5">
        <h2 className="text-center my-5">Get in touch with us</h2>
        {/* <!-- Name input --> */}
        <div class="form-outline mb-4">
          <input type="text" id="form4Example1" class="form-control" />
          <label class="form-label text-white" for="form4Example1">
            Name
          </label>
        </div>

        {/* <!-- Email input --> */}
        <div class="form-outline mb-4">
          <input type="email" id="form4Example2" class="form-control" />
          <label class="form-label text-white" for="form4Example2">
            Email address
          </label>
        </div>

        {/* <!-- Message input --> */}
        <div class="form-outline mb-4">
          <textarea class="form-control" id="form4Example3" rows="4"></textarea>
          <label class="form-label text-white" for="form4Example3">
            Message
          </label>
        </div>

        {/* <!-- Checkbox --> */}
        <div class="form-check d-flex justify-content-center mb-4">
          <input
            class="form-check-input me-2"
            style={mystyle}
            type="checkbox"
            value=""
            id="form4Example4"
            checked
          />
          <label class="form-check-label" for="form4Example4">
            Send me a copy of this message
          </label>
        </div>

        {/* <!-- Submit button --> */}
        <button
          // style={mystyle}
          type="submit"
          class="calculator mx-auto d-block"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default ContactForm;
