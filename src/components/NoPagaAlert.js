import React from "react";
import { Link } from "react-router-dom";
import "../Css/NoPage.css"

const NoPagaAlert = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center NoPagaAlert ">
        <div className="d-flex justify-content-center flex-column align-items-center NoPagaText">
          <h2>No Page found </h2>
          <h4 className="my-4">ERROR 403</h4>
          <Link to="/" className=" text-decoration-none text-black text-center"> Return to<br/><button className="calculator">Home Page</button> </Link>
        </div>
      </div>
    </>
  );
};

export default NoPagaAlert;
