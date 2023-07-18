import React, { useEffect } from "react";
import "../Css/Services.css";
import s1 from "../images/s1.jpeg";
import s2 from "../images/s2.jpeg";
import s3 from "../images/s3.png";
import AOS from "aos";
import "aos/dist/aos.css";

const DiscrptionService = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section class="expaintion container" id="expaintion">
        <div class="content">
          <div class="img-serv" data-aos="flip-right">
            <img src={s1} alt="" />
          </div>
          <div class="text" data-aos="flip-right">
            <h2>Engineering designs</h2>
            <p>
              Our partners work on all types of projects and buildings with
              their various functional specializations, their different
              architectural styles, whatever the culture of the surrounding
              community, as well as their various budgets. That is, everything
              related to the design of the building or facility until it is
              implemented on the ground. All their engineers in this department
              have no less than 5 years of experience, and they have work
              experience in the Gulf countries, and they are familiar with
              public taste, building laws, and municipal requirements. We are
              always keen to ensure that our client receives his project with
              accuracy and high clarity in the details and in a timely manner.
            </p>
            <h4>Our partners provide the following services:</h4>
            <ol>
              <li>Preparation architectural design plans</li>
              <li>Preparation Mechanical design plans</li>
              <li>Preparation structural design plans</li>
              <li>Preparation electrical design plans</li>
            </ol>
          </div>
        </div>
        <div class="content" id="reverse">
          <div
            class="img-serv"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img src={s3} alt="" />
          </div>
          <div
            class="text"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h2>Interior designs</h2>
            <p>
              Our partners work on all decorative styles, from classic to
              modern, high-tech, where we do interior design work for spaces to
              suit the client’s taste and requirements for daily comfort as well
              as functionality. We are also concerned with decorating
              administrative buildings and public buildings that require beauty
              and functionality at the same time.
            </p>
            <h4>
              The department provides the following plans for designed spaces:
            </h4>
            <ol>
              <li>Interior design</li>
              <li>Furniture distribution plans</li>
              <li>Design consulting</li>
              <li>Shopdrawings</li>
            </ol>
          </div>
        </div>
        <div class="content">
          <div class="img-serv" data-aos="fade-down-left">
            <img src={s2} alt="" />
          </div>
          <div class="text" data-aos="fade-down-right">
            <h2>Quantity serving</h2>
            <p>
              Our partners carry out the work of calculating quantities,
              requirements and specifications of materials
            </p>
            <h4>
              This service is provided in the following design disciplines:
            </h4>
            <ol>
              <li>Architectural works</li>
              <li>Construction works</li>
              <li>Electromechanical works</li>
              <li>Decorative works</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default DiscrptionService;
