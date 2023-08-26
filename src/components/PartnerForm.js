import React,{useRef} from "react";

import axios from "axios";
import Swal from "sweetalert2";

const PartnerForm = () => {
  const formRef = useRef(null);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      role: 0,
      isActive: false,
      userName: event.target.elements.userName.value,
      email: event.target.elements.email.value,
      phone: event.target.elements.phone.value,
      service: event.target.elements.service.value,
      password: event.target.elements.password.value,
      message: event.target.elements.message.value,
    };
    console.log(formData);
    try {
      const res = await axios.post("http://localhost:8000/User", formData);
      console.log("Form data sent successfully to server from react");
      formRef.current.reset();
      Swal.fire({
        icon: 'success',
        title: 'Registration successful!',
        showConfirmButton: false,
        timer: 3000,
      });
      // Redirect to the home page or any other desired route
      window.location.href = '/';
      
    } catch (error) {
      console.log("Error sending form from react:", error);
      Swal.fire({
        icon: 'error',
        title: 'Registration failed',
        text: 'Please try again.',
      });
    }
  };
  return (
    <>
      <div className="Partner-bg">
        <div class="form-login mb-5  d-flex justify-content-center flex-column align-items-center">
          <form
            class="shadow p-3 rounded-4 mb-5 opacity-100 form-P"
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <h4 class="py-3">If you would like to become part of us</h4>
            <div class="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingName"
                placeholder="your name"
                name="userName"
              />
              <label htmlFor="floatingName">Company Name</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="email"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-4">
              <input
                type="text"
                className="form-control"
                id="floatingPhone"
                placeholder="079********"
                name="phone"
              />
              <label htmlFor="floatingPhone">Phone number</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                name="password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div>
              <select
                id="service"
                label="service"
                className="form-control mb-5"
                name="service"
              >
                <option>Services: </option>
                <option>Engineering Design</option>
                <option>Quantity serving</option>
                <option>Interior Design</option>
              </select>
            </div>
            {/* <!-- text area --> */}
            <div className="input-group mb-5">
              <span className="input-group-text">Message</span>
              <textarea
                className="form-control"
                aria-label="With textarea"
                placeholder="A few words about your company/office"
                name="message"
              ></textarea>
            </div>

            <button class="w-100 calculator" type="submit">
              Join Us
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PartnerForm;
