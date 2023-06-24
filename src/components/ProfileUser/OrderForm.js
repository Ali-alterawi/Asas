import React, { useRef, useState } from "react";
import axios from "axios";

const OrderForm = () => {
  const [firstSelectValue, setFirstSelectValue] = useState("");
  const [secondSelectValue, setSecondSelectValue] = useState("");
  const [secondSelectOptions, setSecondSelectOptions] = useState([]);
  const [thirdSelectValue, setThirdSelectValue] = useState("");
  const [thirdSelectOptions, setThirdSelectOptions] = useState([]);
  const [number, setNumber] = useState("");
  const formRef = useRef(null);
  const fileInputRef = useRef(null); // Ref for file input

  const handleInputChange = (e) => {
    setNumber(`The Price is ${Number(e.target.value) * 2}`);
  };

  const handleFirstSelectChange = (event) => {
    const selectedValue = event.target.value;
    setFirstSelectValue(selectedValue);

    const optionsMap = {
      "Engineering design": ["KD ENGINEERING", "BLUEPRINT", "BBK", "360ENGINEERING"],
      "Quantity serving": [
        "Real estate company",
        "Manarah contracting",
        "feathers construction company",
      ],
      "Interior design": ["True Block", "Mirror C.C", "Home contracting"],
    };
    const optionsMap2 = {
      "Engineering design": [
        "Preparation architectural design plans",
        "Preparation Mechanical design plans",
        "Preparation structural design plans",
        "Preparation electrical design plans",
      ],
      "Quantity serving": [
        "Architectural works",
        "Construction works",
        "Electromechanical works",
        "Decorative works",
      ],
      "Interior design": [
        "Interior design",
        "Furniture distribution plans",
        "Design consulting",
        "Shopdrawings",
      ],
    };

    const updatedOptions = optionsMap[selectedValue] || [];
    setSecondSelectValue(updatedOptions[0]);
    const updatedOptions2 = optionsMap2[selectedValue] || [];
    setThirdSelectValue(updatedOptions2[0]);

    setSecondSelectOptions(updatedOptions);
    setThirdSelectOptions(updatedOptions2);
  };

  const handleSecondSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSecondSelectValue(selectedValue);
  };

  const handleThirdSelectChange = (event) => {
    const selectedValue = event.target.value;
    setThirdSelectValue(selectedValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      applicantName: event.target.elements.applicantName.value,
      mobileNumber: event.target.elements.mobileNumber.value,
      email: event.target.elements.email.value,
      location: event.target.elements.location.value,
      services: event.target.elements.services.value,
      serviceProvider: event.target.elements.serviceProvider.value,
      kindOfService: event.target.elements.kindOfService.value,
      projectDescription: event.target.elements.projectDescription.value,
      file: fileInputRef.current.files[0],
      number:number
    };
  
    console.log(formData);
    try {
      await axios.post("http://localhost:8000/order", formData);
      console.log("Form data sent successfully to server from react");
      formRef.current.reset();
    } catch (error) {
      console.log("Error sending form from react:", error);
    }
  };


  return (
    <>
       <div className="Main Sidebar my-3 border rounded-4">
        <h2 className="p-3">make a new order</h2>
        <form
          className="shadow p-3 rounded-4 mb-5 opacity-100 form-P"
          style={{ backgroundColor: "#F0F0F7" }}
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <h5 class="text-uppercase text-center fw-semibold">
            Start your project now
          </h5>
          <h6 class="container text-capitalize text-center fw-light">
            Send the initial data, and you will receive a response within 48
            hours only.
          </h6>
          <h5 class="fw-bold pt-3">Personal data:</h5>
          <div class="personal-data">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingUserName"
                placeholder="Create User name"
                name="applicantName"
              />
              <label for="floatingUserName">Applicant's Name:</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingUserName"
                placeholder="00962 ** *** *** *"
                name="mobileNumber"
              />
              <label for="floatingUserName">Mobile number:</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="email"
              />
              <label for="floatingInput">E-mail:</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="Jordan / Amman"
                name="location"
              />
              <label for="floatingInput">Location:</label>
            </div>
          </div>
          <h5 class="fw-bold mt-3">Project data:</h5>
          <div class="project-data">
            <label htmlFor="firstSelect">Services:</label>
            <select
              id="firstSelect"
              value={firstSelectValue}
              onChange={handleFirstSelectChange}
              className="w-100 form-control my-3"
              name="services"
            >
              <option value="">Select your option</option>
              <option value="Engineering design">Engineering design</option>
              <option value="Quantity serving">Quantity serving</option>
              <option value="Interior design">Interior design</option>
            </select>

            <label htmlFor="secondSelect">Services Providers:</label>
            <select
              id="secondSelect"
              value={secondSelectValue}
              onChange={handleSecondSelectChange}
              className="w-100 form-control my-3"
              name="serviceProvider"
            >
              {secondSelectOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <label htmlFor="thirdSelect">Kind Of Service:</label>
            <select
              id="thirdSelect"
              value={thirdSelectValue}
              onChange={handleThirdSelectChange}
              className="w-100 form-control my-3"
              name="kindOfService"
            >
              {thirdSelectOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <label for="" className="text-capitalize">
              describe your project or what you expect:
            </label>
            <textarea
              id=""
              cols="10"
              rows="10"
              placeholder="        ..."
              className="w-100 form-control"
              name="projectDescription"
            ></textarea>
            <div class="form-floating my-3">
              <input
                type="number"
                class="form-control"
                id="floatingUserName"
                placeholder="50m^2"
                onChange={handleInputChange}
                name="totalAreaBuilding"
              />
              <label for="floatingUserName">Total Area Building:</label>
            </div>
            <p>{number}$</p>
            <label htmlFor="formFileMultiple2" className="form-label text-capitalize">
            Upload Land Plan & Land Organization Chart:
          </label>
          <input
  className="form-control"
  type="file"
  id="formFileMultiple2"
  name="files"
  ref={fileInputRef} // Add this line
/>

          <div className="d-flex justify-content-center py-3">
            <input
              type="submit"
              value="Submit"
              id="submit"
              className="w-100 calculator"
            />
          </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default OrderForm;