import React, { useEffect } from "react";
import "../Css/Partner.css";
import o1 from "../images/o1.png";
import o2 from "../images/o2.png";
import o3 from "../images/o3.png";
import o4 from "../images/o4.png";
import o5 from "../images/o5.jpeg";
import o6 from "../images/o6.jpeg";
import o7 from "../images/o7.jpeg";
import o8 from "../images/o8.jpeg";
import o9 from "../images/o9.jpeg";
import o10 from "../images/o10.jpeg";
import eng from "../images/engineer.png";
import { Link } from "react-router-dom";

const Partner = () => {
  const handleShowEDO = () => {
    let x = document.getElementsByClassName("QSO");
    let y = document.getElementsByClassName("IDO");
    let z = document.getElementsByClassName("EDO");

    x[0].style.display = "none";
    x[1].style.display = "none";
    x[2].style.display = "none";

    y[0].style.display = "none";
    y[1].style.display = "none";
    y[2].style.display = "none";

    z[0].style.display = "unset";
    z[1].style.display = "unset";
    z[2].style.display = "unset";
    z[3].style.display = "unset";
  };

  const handleShowQSO = () => {
    let x = document.getElementsByClassName("QSO");
    let y = document.getElementsByClassName("IDO");
    let z = document.getElementsByClassName("EDO");

    x[0].style.display = "unset";
    x[1].style.display = "unset";
    x[2].style.display = "unset";

    y[0].style.display = "none";
    y[1].style.display = "none";
    y[2].style.display = "none";

    z[0].style.display = "none";
    z[1].style.display = "none";
    z[2].style.display = "none";
    z[3].style.display = "none";
  };

  const handleShowIDO = () => {
    let x = document.getElementsByClassName("QSO");
    let y = document.getElementsByClassName("IDO");
    let z = document.getElementsByClassName("EDO");

    x[0].style.display = "none";
    x[1].style.display = "none";
    x[2].style.display = "none";

    y[0].style.display = "unset";
    y[1].style.display = "unset";
    y[2].style.display = "unset";

    z[0].style.display = "none";
    z[1].style.display = "none";
    z[2].style.display = "none";
    z[3].style.display = "none";
  };

  const handleShowAll = () => {
    let x = document.getElementsByClassName("QSO");
    let y = document.getElementsByClassName("IDO");
    let z = document.getElementsByClassName("EDO");

    x[0].style.display = "unset";
    x[1].style.display = "unset";
    x[2].style.display = "unset";

    y[0].style.display = "unset";
    y[1].style.display = "unset";
    y[2].style.display = "unset";

    z[0].style.display = "unset";
    z[1].style.display = "unset";
    z[2].style.display = "unset";
    z[3].style.display = "unset";
  };
  useEffect(() => {
    const list = document.querySelectorAll(".list-unstyled li");

    const activeLink = (e) => {
      list.forEach((item) => {
        item.classList.remove("active");
      });
      e.target.classList.add("active");
    };

    list.forEach((item) => item.addEventListener("click", activeLink));

    return () => {
      list.forEach((item) => item.removeEventListener("click", activeLink));
    };
  }, []);
  return (
    <>
      <div class="our-work text-center pt-2 pb-5">
        <div class="container">
          <div class="main-title mt-2 mb-5 position-relative">
            <img class="mb-4 img-logo" src={eng} alt="" />
            <h2>Our partners</h2>
            <p class="text-black-50 text-uppercase">
              would you like to join us as a partner
            </p>
            <div class="d-flex justify-content-center mt-5">
              <button class="btn rounded-pill  text-uppercase main-btn">
                <Link to="/PartnerPage" className=" text-decoration-none text-white">Click here</Link>
              </button>
            </div>
          </div>
          <ul class="list-unstyled d-flex justify-content-center mt-5 mb-5">
            <li onClick={handleShowAll} id="all" class="active rounded-pill">
              All
            </li>
            <li onClick={handleShowEDO} id="edo">
              Engineering design Offices
            </li>
            <li onClick={handleShowQSO} id="qso">
              Quantity serving Offices
            </li>
            <li onClick={handleShowIDO} id="ido">
              Interior design Offices
            </li>
          </ul>
          <div class="row">
            <div class="col-sm-6 col-md-4 col-lg-3 EDO all" id="img-1-1">
              <div class="box mb-3 bg-white" data-work="KD ENGINEERING">
                <img class="img-fluid" src={o1} alt="KD ENGINEERING" />
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 EDO all" id="img-1-2">
              <div class="box mb-3 bg-white" data-work="BLUEPRINT">
                <img class="img-fluid" src={o2} alt="BLUEPRINT" />
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 EDO  all" id="img-1-3">
              <div class="box mb-3 bg-white" data-work="BBK">
                <img class="img-fluid" src={o3} alt="BBK" />
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 EDO  all" id="img-1-4">
              <div class="box mb-3 bg-white" data-work="360ENGINEERING">
                <img class="img-fluid" src={o4} alt="360ENGINEERING" />
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 QSO  all" id="img-2-1">
              <div class="box mb-3 bg-white" data-work="Real estate company">
                <img class="img-fluid" src={o5} alt="Real estate company" />
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 QSO all" id="img-2-2">
              <div class="box mb-3 bg-white" data-work="Manarah contracting">
                <img class="img-fluid" src={o6} alt="Manarah contracting" />
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 QSO  all" id="img-2-3">
              <div
                class="box mb-3 bg-white"
                data-work="feathers construction company"
              >
                <img
                  class="img-fluid"
                  src={o7}
                  alt="feathers construction company"
                />
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 IDO  all" id="img-3-1">
              <div class="box mb-3 bg-white" data-work="True Block">
                <img class="img-fluid" src={o8} alt="True Block" />
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 IDO  all" id="img-3-2">
              <div class="box mb-3 bg-white" data-work="Mirror C.C">
                <img class="img-fluid" src={o9} alt="Mirror C.C" />
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 IDO all" id="img-3-3">
              <div class="box mb-3 bg-white" data-work="Home contracting">
                <img class="img-fluid" src={o10} alt="Home contracting" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
