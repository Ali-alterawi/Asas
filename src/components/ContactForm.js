import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiEmail, mdiPhone, mdiGoogleMaps } from "@mdi/js";
import "../Css/ContactForm.css";
import axios from "axios";
import Swal from "sweetalert2";

const ContactForm = () => {
  const mystyle = {
    color: "#fff",
    backgroundColor: "#064080",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/oneMessage",
        formData
      );
      console.log(response.data);
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Your message has been sent successfully!",
    });

    // Clear the form inputs after successful submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while sending your message. Please try again later.",
      });
    }
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
                support@ASAS.com
              </Link>
            </p>
            <p>
              E-mail :{" "}
              <Link
                to="info@example.com"
                target="_blank"
                className="text-blue text-decoration-none"
              >
                info@ASAs.com
              </Link>
            </p>
          </div>
        </div>
      </div>
      <form className="container my-5" onSubmit={handleSubmit}>
        <h2 className="text-center my-5">Get in touch with us</h2>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="form4Example1"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <label className="form-label text-white" htmlFor="form4Example1">
            Name
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="email"
            id="form4Example2"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <label className="form-label text-white" htmlFor="form4Example2">
            Email address
          </label>
        </div>

        <div className="form-outline mb-4">
          <textarea
            className="form-control"
            id="form4Example3"
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
          <label className="form-label text-white" htmlFor="form4Example3">
            Message
          </label>
        </div>

        <button
          type="submit"
          className="calculator mx-auto d-block"
          style={mystyle}
        >
          Send
        </button>
      </form>
    </>
  );
};

export default ContactForm;
