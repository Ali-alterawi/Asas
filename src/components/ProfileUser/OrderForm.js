import React, { useState } from "react";
import NavBar from "../NavBar";

const OrderForm = () => {
  const [firstSelectValue, setFirstSelectValue] = useState([]);
  const [secondSelectValue, setSecondSelectValue] = useState([]);
  const [secondSelectOptions, setSecondSelectOptions] = useState([]);
  const [thirdSelectValue, setThirdSelectValue] = useState([]);
  const [thirdSelectOptions, setThirdSelectOptions] = useState([]);
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    setNumber(e.target.value);
    const multipliedResult = Number(number) * 2;
    setResult(`total price is : ${multipliedResult}JOD`);
    
  };

  const handleFirstSelectChange = (event) => {
    const selectedValue = event.target.value;
    setFirstSelectValue(selectedValue);

    const optionsMap = {
      option1: ["KD ENGINEERING", "BLUEPRINT", "BBK", "360ENGINEERING"],
      option2: [
        "Real estate company",
        "Manarah contracting",
        "feathers construction company",
      ],
      option3: ["True Block", "Mirror C.C", "Home contracting"],
    };
    const optionsMap2 = {
      option1: [
        "Preparation architectural design plans",
        "Preparation Mechanical design plans",
        "Preparation structural design plans",
        "Preparation electrical design plans",
      ],
      option2: [
        "Architectural works",
        "Construction works",
        "Electromechanical works",
        "Decorative works",
      ],
      option3: [
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

  return (
    <>
    <NavBar/>
      <div className="PartnerOrder-bg">
        <div class="form-login mb-5  d-flex justify-content-center flex-column align-items-center">
          <form class="shadow p-3 rounded-4 mb-5 opacity-100 form-P">
            <h2 class="text-uppercase text-center fw-semibold">
              Start your project now
            </h2>
            <h4 class="container text-capitalize text-center fw-light">
              Send the initial data, and you will receive a response within 48
              hours only.
            </h4>
            <h5 class="fw-bold pt-3">Personal data:</h5>
            <div class="personal-data">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingUserName"
                  placeholder="Create User name"
                />
                <label for="floatingUserName">Applicant's Name:</label>
              </div>
              <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingUserName"
                    placeholder="00962 ** *** *** *"
                  />
                  <label for="floatingUserName">Mobile number:</label>
                </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">E-mail:</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Jordan / Amman"
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
              >
                <option value="">Select your option</option>
                <option value="option1">Engineering design</option>
                <option value="option2">Quantity serving</option>
                <option value="option3">Interior design</option>
              </select>

              <label htmlFor="secondSelect">Services Providers:</label>
              <select
                id="secondSelect"
                value={secondSelectValue}
                onChange={handleSecondSelectChange}
                className="w-100 form-control my-3"
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
              >
                {thirdSelectOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <label for="" className="text-capitalize">describe your project or what you expect:</label>
              <textarea
                name=""
                id=""
                cols="10"
                rows="10"
                placeholder="        ..."
                className="w-100 form-control"
              ></textarea>
              <div class="form-floating my-3">
                  <input
                    type="number"
                    class="form-control"
                    id="floatingUserName"
                    placeholder="50m^2"
                    value={number} onChange={handleInputChange}
                  />
                  <label for="floatingUserName">Total Area Building:</label>
                </div>
                <p>{result}$</p>
              <label for="formFileMultiple2" class="form-label text-capitalize">
                Upload Land Plan & Land Organization Chart :
              </label>
              <input
                class="form-control"
                type="file"
                id="formFileMultiple2"
                multiple
              />
            </div>
            <div class="d-flex justify-content-center py-3">
              <input
                type="submit"
                value="Submit"
                id="submit"
                className="w-100 calculator"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default OrderForm;
