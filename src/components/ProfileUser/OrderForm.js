import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const OrderForm = ({ UserId }) => {
  // console.log(UserId);
  const [firstSelectValue, setFirstSelectValue] = useState([]);
  const [secondSelectValue, setSecondSelectValue] = useState([]);
  const [secondSelectOptions, setSecondSelectOptions] = useState([]);
  const [thirdSelectValue, setThirdSelectValue] = useState([]);
  const [thirdSelectOptions, setThirdSelectOptions] = useState([]);
  const [totalAreaBuilding, setTotalAreaBuilding] = useState("");
  const [number, setNumber] = useState("");
  const formRef = useRef(null);
  // const fileInputRef = useRef(null); // Ref for file input

  const handleInputChange = (event) => {
    setNumber(`The Price is ${Number(event.target.value) * 2}`);
    handleChange(event);
  };

  const [companiesInterior, setCompaniesInterior] = useState([]);
  const [companiesQuantity, setCompaniesQuantity] = useState([]);
  const [companiesEngineering, setCompaniesEngineering] = useState([]);

  useEffect(() => {
    fetchCompaniesInterior();
    fetchCompaniesQuantity();
    fetchCompaniesEngineering();
  }, []);
  const optionsMap = {
    "Engineering design":
      companiesEngineering.length > 0
        ? companiesEngineering.map((element, index) => ({
            index: index + 1,
            userName: element.userName,
            id:element._id,
          }))
        : [],
    "Quantity serving":
      companiesQuantity.length > 0
        ? companiesQuantity.map((element, index) => ({
            index: index + 1,
            userName: element.userName,
            id:element._id,
          }))
        : [],
    "Interior design":
      companiesInterior.length > 0
        ? companiesInterior.map((element, index) => ({
            index: index + 1,
            userName: element.userName,
            id:element._id,
          }))
        : [],
  };
  // console.log(optionsMap);
  const fetchCompaniesInterior = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/companiesInterior"
      );
      setCompaniesInterior(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCompaniesQuantity = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/companiesQuantity"
      );
      setCompaniesQuantity(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCompaniesEngineering = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/companiesEngineering"
      );
      setCompaniesEngineering(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFirstSelectChange = (event) => {
    const selectedValue = event.target.value;
    setFirstSelectValue(selectedValue);

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
    setSecondSelectValue(updatedOptions);
    const updatedOptions2 = optionsMap2[selectedValue] || [];
    setThirdSelectValue(updatedOptions2[0]);

    setSecondSelectOptions(updatedOptions);
    console.log(updatedOptions);
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

  const handleTotalAreaBuildingChange = (event) => {
    const value = event.target.value;
    setTotalAreaBuilding(value);
    handleChange(event); // Call the existing handleChange function
  };
  const [formData, setFormData] = useState({
    UserId: UserId,
    applicantName: "",
    email: "",
    mobileNumber: "",
    location: "",
    services: "",
    serviceProvider: "",
    kindOfService: "",
    projectdescription: "",
  });
  // const [images, setImages] = useState([]);
  const [projects, setProjects] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // console.log(formData);

  const handleReportsChange = (event) => {
    setProjects([...event.target.files]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // console.log(formData);

    const newItems = secondSelectOptions.filter((item) => item.userName === formData.serviceProvider);
    // console.log(newItems[0].id);
    try {
      const formDataWithFiles = new FormData();
      formDataWithFiles.append("userId", formData.UserId);
      formDataWithFiles.append("applicantName", formData.applicantName);
      formDataWithFiles.append("email", formData.email);
      formDataWithFiles.append("mobileNumber", formData.mobileNumber);
      formDataWithFiles.append("location", formData.location);
      formDataWithFiles.append("services", formData.services);
      formDataWithFiles.append("serviceProvider", formData.serviceProvider);
      formDataWithFiles.append("offiecsID", newItems[0].id);
      formDataWithFiles.append("kindOfService", formData.kindOfService);
      formDataWithFiles.append(
        "projectDescription",
        formData.projectdescription
      );
      formDataWithFiles.append("totalAreaBuilding", totalAreaBuilding);
      formDataWithFiles.append("number", number);

      // images.forEach((file) => {
      //   formDataWithFiles.append("images", file);
      // });
      projects.forEach((file) => {
        formDataWithFiles.append("projects", file);
      });
      console.log(formData);
      const response = await axios.post(
        "http://localhost:8000/order",
        formDataWithFiles
        // config
      );

      console.log("Data sent successfully");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      <div className="Main Sidebar my-3 border rounded-4">
        <h2 className="p-3">Make a new order</h2>
        <form
          className="shadow p-3 rounded-4 mb-5 opacity-100 form-P mx-3"
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
              onChange={(event) => {
                handleFirstSelectChange(event);
                handleChange(event);
              }}
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
              onChange={(event) => {
                handleSecondSelectChange(event);
                handleChange(event);
              }}
              className="w-100 form-control my-3"
              name="serviceProvider"
            >
              {secondSelectOptions.map((option) => (
                <option key={option.userName} value={option.userName}>
                  {option.userName}{console.log(option.userName)}
                </option>
              ))}
              
            </select>
            <label htmlFor="thirdSelect">Kind Of Service:</label>
            <select
              id="thirdSelect"
              value={thirdSelectValue}
              onChange={(event) => {
                handleThirdSelectChange(event);
                handleChange(event);
              }}
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
              onChange={handleChange}
            ></textarea>
            <div class="form-floating my-3">
              <input
                type="number"
                class="form-control"
                id="floatingUserName"
                placeholder="50m^2"
                onChange={(event) => {
                  handleInputChange(event);
                  handleChange(event);
                  handleTotalAreaBuildingChange(event);
                }}
                name="totalAreaBuilding"
              />
              <label for="floatingUserName">Total Area Building:</label>
            </div>
            <p>{number}$</p>
            <label
              htmlFor="formFileMultiple2"
              className="form-label text-capitalize"
            >
              Upload Land Plan & Land Organization Chart:
            </label>
            <input
              className="form-control"
              type="file"
              id="formFileMultiple2"
              name="file"
              multiple
              onChange={handleReportsChange}
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
