import React, { useEffect, useState } from "react";
import "../Css/Partner.css";
import eng from "../images/engineer.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Partner = () => {
  const [partners, setPartners] = useState([]);
  const [selectedservice, setSelectedservice] = useState("all");

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        // const responseCompaniesAll = await axios.get(
        //   "http://localhost:8000/companiesall"
        // );
        // const dataCompaniesAll = responseCompaniesAll.data;

        const responseInterior = await axios.get(
          "http://localhost:8000/companiesInterior"
        );
        const dataInterior = responseInterior.data;

        const responseQuantity = await axios.get(
          "http://localhost:8000/companiesQuantity"
        );
        const dataQuantity = responseQuantity.data;

        const responseEngineering = await axios.get(
          "http://localhost:8000/companiesEngineering"
        );
        const dataEngineering = responseEngineering.data;

        const allPartners = [
          // ...dataCompaniesAll,
          ...dataInterior,
          ...dataQuantity,
          ...dataEngineering,
        ];

        setPartners(allPartners);
      } catch (error) {
        console.log("Error fetching partners:", error);
      }
    };

    fetchPartners();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedservice(category);
  };

  const filteredPartners =
    selectedservice === "all"
      ? partners
      : partners.filter((partner) =>
          partner.service === selectedservice ||
          partner.category === selectedservice
        );

  return (
    <>
      <div className="our-work text-center pt-2 pb-5">
        <div className="container">
          <div className="main-title mt-2 mb-5 position-relative">
            <img className="mb-4 img-logo" src={eng} alt="" />
            <h2>Our partners</h2>
            <p className="text-black-50 text-uppercase">
              would you like to join us as a partner
            </p>
            <div className="d-flex justify-content-center mt-5">
              <button className="btn rounded-pill text-uppercase main-btn">
                <Link
                  to="/PartnerPage"
                  className="text-decoration-none text-white"
                >
                  Click here
                </Link>
              </button>
            </div>
          </div>
          <ul className="list-unstyled d-flex justify-content-center mt-5 mb-5">
            <li
              id="all"
              className={`rounded-pill ${
                selectedservice === "all" ? "active" : ""
              }`}
              onClick={() => handleCategoryClick("all")}
            >
              All
            </li>
            <li
              id="edo"
              className={`${
                selectedservice === "Engineering Design" ? "active" : ""
              }`}
              onClick={() => handleCategoryClick("Engineering Design")}
            >
              Engineering design Offices
            </li>
            <li
              id="qso"
              className={`${
                selectedservice === "Quantity serving" ? "active" : ""
              }`}
              onClick={() => handleCategoryClick("Quantity serving")}
            >
              Quantity serving Offices
            </li>
            <li
              id="ido"
              className={`${
                selectedservice === "Interior Design" ? "active" : ""
              }`}
              onClick={() => handleCategoryClick("Interior Design")}
            >
              Interior design Offices
            </li>
          </ul>
          <div className="row">
            {filteredPartners.map((partner, index) => (
              <div
                key={index}
                className={`col-sm-6 col-md-4 col-lg-3 ${partner.service} all`}
                id={`img-${index + 1}-${index + 1}`}
              >
                <div className="box mb-3 bg-white" data-work={partner.userName}>
                  <img
                    className="img-fluid"
                    src={
                      partner?.photo
                        ? `http://localhost:8000/${partner.photo}`
                        : "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg"
                    }
                    alt={partner.userName}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
