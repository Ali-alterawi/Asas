import React from "react";
import "../Css/Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
    <div className="bg-img">
      <div className="hero-bg justify-content-center">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <h1 className=" fw-bold non">ASAS</h1>
          <h5 className="mb-4">WE BUILD YOUR DREAMS</h5>
          <p className="mb-4">
            we provide all services you want to complete your projects from A-Z
          </p>
          <Link to="login"><button className="calculator">make a new Order</button></Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default Hero;
